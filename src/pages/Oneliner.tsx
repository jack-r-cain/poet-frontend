import { Link, useNavigate, useParams } from 'react-router'
import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog'
import { useState } from 'react'

export default function OneLiner() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const oneLiners = JSON.parse(localStorage.getItem('oneLiners') || '[]')

  const oneLiner = oneLiners.find(
    (p: {
      id: string
      title: string
      author: string
      content: string
      createdAt: string
    }) => p.id.toString() === id
  )

  function handleEdit() {
    navigate(`/edit-one-liner/${id}`)
  }

  function confirmDelete() {
    const newLines = oneLiners.filter(
      (p: { id: string }) => p.id.toString() !== id
    )
    localStorage.setItem('oneLiners', JSON.stringify(newLines))
    navigate('/one-liners')
  }
  if (!oneLiner) {
    return (
      <Section>
        <Container className='text-center'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            One Liner not found
          </h1>
        </Container>
      </Section>
    )
  }

  return (
    <Section>
      <Container className='max-w-7xl mx-auto flex flex-col items-center justify-center'>
        <div className='flex justify-between w-full'>
          <Link
            to='/one-liners'
            className='text-primary-500 hover:underline mb-6  self-start'>
            &larr; Back to One Liners
          </Link>
          <div className='flex gap-4'>
            <Button variant='outline' size='sm' onClick={handleEdit}>
              Edit
            </Button>
            <Button
              variant='destructive'
              size='sm'
              onClick={() => setShowDeleteDialog(true)}>
              Delete
            </Button>
          </div>
        </div>
        <Dialog
          open={showDeleteDialog}
          onClose={() => setShowDeleteDialog(false)}>
          <DialogContent>
            <DialogTitle>Delete Poem?</DialogTitle>
            <DialogDescription>
              Are you sure you want to delete this One Liner? This action cannot be
              undone.
            </DialogDescription>
            <DialogFooter>
              <Button
                variant='ghost'
                onClick={() => setShowDeleteDialog(false)}>
                Cancel
              </Button>
              <Button variant='ghost' onClick={confirmDelete}>
                Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
        <pre className='whitespace-pre-wrap text-md md:text-xl leading-relaxed font-sans text-left tracking-medium'>
          {oneLiner.content}
        </pre>
      </Container>
    </Section>
  )
}

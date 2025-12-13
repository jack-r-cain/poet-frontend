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

export default function Poem() {
  const navigate = useNavigate()
  const { id } = useParams()
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const poems = JSON.parse(localStorage.getItem('poems') || '[]')

  const poem = poems.find(
    (p: {
      id: string
      title: string
      author: string
      content: string
      createdAt: string
    }) => p.id.toString() === id
  )

  function handleEdit() {
    navigate(`/edit/${id}`)
  }

  function confirmDelete() {
    const newPoems = poems.filter((p: { id: string }) => p.id.toString() !== id)
    localStorage.setItem('poems', JSON.stringify(newPoems))
    navigate('/poems')
  }
  if (!poem) {
    return (
      <Section>
        <Container className='text-center'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>
            Poem not found
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
            to='/poems'
            className='text-primary-500 hover:underline mb-6  self-start'>
            &larr; Back to Poems
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
              Are you sure you want to delete this poem? This action cannot be
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
        <h1 className='text-3xl md:text-6xl font-bold mb-2'>{poem.title}</h1>
        <p className='text-neutral-600 mb-8'>by {poem.author}</p>
        <pre className='whitespace-pre-wrap text-md md:text-xl leading-relaxed font-sans text-left tracking-medium'>
          {poem.content}
        </pre>
      </Container>
    </Section>
  )
}

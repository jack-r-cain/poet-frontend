import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [errors, setErrors] = useState({ title: '', content: '' })

  const [poem, setPoem] = useState(() => {
    const storedPoems = localStorage.getItem('poems')
    if (storedPoems) {
      const poems = JSON.parse(storedPoems)
      return poems.find((p: any) => p.id.toString() === id)
    }
    return null
  })

  const [title, setTitle] = useState(poem?.title || '')
  const [content, setContent] = useState(poem?.content || '')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Reset errors
    setErrors({ title: '', content: '' })

    // Validate
    const newErrors = { title: '', content: '' }

    if (!title.trim()) {
      newErrors.title = 'Title is required'
    }

    if (!content.trim()) {
      newErrors.content = 'Content is required'
    }

    // If errors exist, set them and stop
    if (newErrors.title || newErrors.content) {
      setErrors(newErrors)
      return
    }

    // Get poems from localStorage
    const storedPoems = localStorage.getItem('poems')
    if (storedPoems) {
      const poems = JSON.parse(storedPoems)

      // Find and update the poem
      const updatedPoems = poems.map((p: any) =>
        p.id.toString() === id ? { ...p, title, content } : p
      )

      // Save back to localStorage
      localStorage.setItem('poems', JSON.stringify(updatedPoems))

      // Redirect back to the poem
      navigate(`/poems/${id}`)
    }
  }

  return (
    <>
      <title>Edit</title>
      <Section>
        <Container className='md:w-3/5'>
          <div className='flex flex-col gap-4'>
            <Link
              to='/poems'
              className='text-primary-500 hover:underline  self-start'>
              &larr; Back to Poems
            </Link>
            <h1 className='text-4xl text-center'>Editing</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <Input
                placeholder='Title'
                type='text'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                variant={errors.title ? 'error' : 'default'}
              />
              {errors.title && (
                <p className='text-error-600 text-sm mt-1'>{errors.title}</p>
              )}

              <Textarea
                name='content'
                placeholder='Your poem here...'
                rows={10}
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant={errors.content ? 'error' : 'default'}
              />
              {errors.content && (
                <p className='text-error-600 text-sm mt-1'>{errors.content}</p>
              )}

              <Button type='submit'>Save Changes</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

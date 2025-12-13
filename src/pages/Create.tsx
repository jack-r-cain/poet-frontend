import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Textarea from '@/components/ui/Textarea'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Create() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [errors, setErrors] = useState({ title: '', content: '' })

  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    // Clear previous errors
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

    // Get existing poems from localStorage
    const existingPoems = localStorage.getItem('poems')
    const poems = existingPoems ? JSON.parse(existingPoems) : []

    // Create new poem with unique ID
    const newPoem = {
      id: Date.now().toString(), // Simple ID generation
      title,
      author: 'Jack Cain',
      content,
      createdAt: new Date().toISOString().split('T')[0],
    }

    // Add to array and save
    poems.push(newPoem)
    localStorage.setItem('poems', JSON.stringify(poems))

    // Redirect to poems page
    navigate('/poems')
  }

  return (
    <>
      <title>Create</title>
      <Section>
        <Container className='md:w-3/5'>
          <div className='flex flex-col gap-4'>
            <h1>Create A Poem</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <Input
                placeholder='Title'
                type='text'
                onChange={(e) => setTitle(e.target.value)}
                variant={errors.title ? 'error' : 'default'}
              />
              {errors.title && (
                <p className='text-error-600 text-sm'>{errors.title}</p>
              )}

              <Textarea
                name='content'
                placeholder='Your poem here...'
                rows={10}
                onChange={(e) => setContent(e.target.value)}
                variant={errors.content ? 'error' : 'default'}
              />
              {errors.content && (
                <p className='text-error-600 text-sm'>{errors.content}</p>
              )}

              <Button type='submit'>Save</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

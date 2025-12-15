import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router'

export default function Edit() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [line, setLine] = useState(() => {
    const storedLines = localStorage.getItem('oneLiners')
    if (storedLines) {
      const lines = JSON.parse(storedLines)
      return lines.find((l: any) => l.id.toString() === id)
    }
    return null
  })

  const [content, setContent] = useState(line?.content || '')

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    // Reset errors
    setError('')

    // Validate
    let newError = ''

    if (!content.trim()) {
      newError = 'Content is required'
    }

    // If errors exist, set them and stop
    if (newError.length > 0) {
      setError(newError)
      return
    }

    // Get lines from localStorage
    const storedLines = localStorage.getItem('oneLiners')
    if (storedLines) {
      const lines = JSON.parse(storedLines)

      // Find and update the poem
      const updatedLines = lines.map((l: any) =>
        l.id.toString() === id ? { ...l, content } : l
      )

      // Save back to localStorage
      localStorage.setItem('oneLiners', JSON.stringify(updatedLines))
      // Redirect back to the poem
      navigate(`/one-liners/${id}`)
    }
  }

  return (
    <>
      <title>Edit</title>
      <Section>
        <Container className='md:w-3/5'>
          <div className='flex flex-col gap-4'>
            <Link
              to='/one-liners'
              className='text-primary-500 hover:underline  self-start'>
              &larr; Back to One Liners
            </Link>
            <h1 className='text-4xl text-center'>Editing</h1>
            <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
              <Input
                type='text'
                value={content}
                onChange={(e) => setContent(e.target.value)}
                variant={error ? 'error' : 'default'}
              />
              {error && <p className='text-error-600 text-sm mt-1'>{error}</p>}

              <Button type='submit'>Save Changes</Button>
            </form>
          </div>
        </Container>
      </Section>
    </>
  )
}

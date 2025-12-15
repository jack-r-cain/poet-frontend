import Container from '@/components/layout/Container'
import Section from '@/components/layout/Section'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import { useState } from 'react'
import { useNavigate } from 'react-router'

export default function CreateOneliner() {
  const [content, setContent] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    // Clear previous errors
    setError('')

    // Validate
    let newError = ''

    if (!content.trim()) {
      newError = 'Content is required'
    }

    if (newError.length > 0) {
      setError(newError)
      return
    }

    // Get existing one liners from localStorage
    const existingLines = localStorage.getItem('oneLiners')
    const lines = existingLines ? JSON.parse(existingLines) : []

    // Create new one liner with unique ID
    const newLine = {
      id: Date.now().toString(), // Simple ID generation
      content,
      createdAt: new Date().toISOString().split('T')[0],
    }

    // Add to array and save
    lines.push(newLine)
    localStorage.setItem('oneLiners', JSON.stringify(lines))

    // Redirect to one liners page
    navigate('/one-liners')
  }
  return (
    <>
      <title>Create One Liner</title>
      <Section>
        <Container className='md:w-3/5'>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-bold mb-4 text-center'>
              Create One Liner
            </h1>
            <Section>
              <Container className='md:w-3/5'>
                <div className='flex flex-col gap-4'>
                  <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                    <Input
                      placeholder='Your Line'
                      type='text'
                      onChange={(e) => setContent(e.target.value)}
                      variant={error ? 'error' : 'default'}
                    />
                    {error && <p className='text-error-600 text-sm'>{error}</p>}

                    <Button type='submit'>Save</Button>
                  </form>
                </div>
              </Container>
            </Section>
          </div>
        </Container>
      </Section>
    </>
  )
}

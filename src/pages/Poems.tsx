import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from '@/components/ui/Card'
import { Link } from 'react-router'

export default function Poems() {
  const poems = JSON.parse(localStorage.getItem('poems') || '[]')

  return (
    <Section>
      <Container>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>All Poems</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {poems.map(
            (poem: {
              id: string
              title: string
              author: string
              content: string
              createdAt: string
            }) => (
              <Link key={poem.id} to={`/poems/${poem.id}`}>
                <Card
                  className='cursor-pointer hover:shadow-lg transition-shadow hover:y-2'
                  key={poem.id}>
                  <CardHeader>
                    <CardTitle>{poem.title}</CardTitle>
                    <CardDescription>by {poem.author}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className='text-neutral-600  truncate'>{poem.content}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          )}
        </div>
      </Container>
    </Section>
  )
}

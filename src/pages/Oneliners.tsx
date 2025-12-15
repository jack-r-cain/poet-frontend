import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'

import { Card, CardContent } from '@/components/ui/Card'
import { Link } from 'react-router'

export default function OneLiners() {
  const oneLiners = JSON.parse(localStorage.getItem('oneLiners') || '[]')

  return (
    <Section>
      <Container>
        <h1 className='text-3xl md:text-4xl font-bold mb-8'>All One Liners</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {oneLiners.map(
            (oneLiner: { id: string; content: string; createdAt: string }) => (
              <Link key={oneLiner.id} to={`/one-liners/${oneLiner.id}`}>
                <Card
                  className='cursor-pointer hover:shadow-lg transition-shadow hover:y-2 p-4'
                  key={oneLiner.id}>
                  <CardContent>
                    <p className='text-neutral-600  truncate'>
                      {oneLiner.content}
                    </p>
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

import { Link } from 'react-router'
import Section from '@/components/layout/Section'
import Container from '@/components/layout/Container'
import Button from '@/components/ui/Button'

export default function Home() {
  return (
    <>
      <title>Poet</title>
      {/* Hero Section */}
      <Section>
        <Container className='text-center max-w-3xl mx-auto mb-68'>
          <h1 className='text-4xl md:text-6xl font-bold mb-6'>
            Find the Perfect Line from Your Own Words
          </h1>
          <p className='text-lg md:text-xl text-neutral-600 mb-8 leading-relaxed'>
            Search your personal poetry collection by meaning, not just
            keywords. AI helps you discover the lines you've already
            written—nothing generated, just intelligently organized.
          </p>
          <div className='flex flex-col md:flex-row gap-4 justify-center'>
            <Link to='/create'>
              <Button size='lg'>Start Writing</Button>
            </Link>
            <Link to='/poems'>
              <Button variant='secondary' size='lg'>
                Browse Poems
              </Button>
            </Link>
            <Link to='#about'>
              <Button variant='secondary' size='lg'>
                Learn More
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* About Section */}
      <Section className='bg-neutral-200'>
        <Container className='max-w-3xl mx-auto'>
          <h2
            id='about'
            className='text-3xl md:text-4xl font-bold mb-6 text-center'>
            About
          </h2>
          <div className='space-y-4 text-lg text-neutral-700 leading-relaxed'>
            <p>
              Your words. Your voice. Your collection. This app uses AI
              embeddings to help you search through poems you've written by
              meaning and theme, not just exact matches. Looking for something
              you wrote about "letting go"? We'll surface those lines, even if
              you never used those exact words.
            </p>
            <p>
              Nothing here is AI-generated. The intelligence comes from
              understanding what you've already written and helping you
              rediscover it when inspiration strikes. Build your archive, find
              unexpected connections in your own work, and never lose track of a
              good line again.
            </p>
          </div>
        </Container>
      </Section>
    </>
  )
}

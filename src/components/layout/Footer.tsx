import { cn } from '@/lib/utils'

interface FooterProps {
  className?: string
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn('border-t shadow-md bg-neutral-50', className)}>
      <div className='container mx-auto px-4 py-6'>
        <p className='text-center text-sm md:text-base'>© 2025 Jack Cain</p>
      </div>
    </footer>
  )
}

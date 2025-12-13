import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface SectionProps {
  children: ReactNode
  className?: string
}

export default function Section({ children, className }: SectionProps) {
  return (
    <section className={cn('py-8 md:py-12', className)}>{children}</section>
  )
}

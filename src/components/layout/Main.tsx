import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface MainProps {
  children: ReactNode
  className?: string
}

export default function Main({ children, className }: MainProps) {
  return (
    <main className={cn('flex-1 bg-primary-50', className)}>{children}</main>
  )
}

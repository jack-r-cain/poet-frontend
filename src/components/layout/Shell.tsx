import type { ReactNode } from 'react'

interface ShellProps {
  children: ReactNode
}

export default function Shell({ children }: ShellProps) {
  return <div className='flex min-h-screen flex-col'>{children}</div>
}

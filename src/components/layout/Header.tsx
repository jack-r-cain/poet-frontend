// src/components/layout/header.tsx
import { cn } from '@/lib/utils'
import { Link } from 'react-router'

interface Route {
  label: string
  href: string
}

interface HeaderProps {
  title: string
  routes: Route[]
  className?: string
}

export default function Header({ title, routes, className }: HeaderProps) {
  return (
    <header className={cn('border-b bg-primary-100 shadow-md', className)}>
      <div className='container mx-auto px-4 py-4'>
        <div className='flex items-center justify-between'>
          <h1 className='text-lg md:text-2xl font-semibold'>{title}</h1>
          <nav>
            <ul className='flex items-center gap-3 md:gap-6'>
              {routes.map((route) => (
                <li key={route.href}>
                  <Link
                    to={route.href}
                    className='text-sm md:text-base text-neutral-700 hover:text-primary-600 transition-colors'>
                    {route.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

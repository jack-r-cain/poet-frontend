import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive'
  size?: 'sm' | 'md' | 'lg'
}

const buttonVariants = cva(
  // Base styles (always applied)
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      // variant prop
      variant: {
        primary: 'bg-primary-500 text-white hover:bg-primary-600',
        secondary: 'bg-neutral-200 text-neutral-900 hover:bg-neutral-300',
        outline:
          'border-2 border-primary-500 text-primary-600 hover:bg-primary-50',
        ghost: 'hover:bg-neutral-100 text-neutral-700',
        destructive:
          'border-2 border-error-500 text-error-600 hover:bg-error-50',
      },
      // size prop
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4',
        lg: 'h-12 px-6 text-lg',
      },
    },
    // Default values
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
)

export default function Button({
  className,
  variant,
  size,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  )
}

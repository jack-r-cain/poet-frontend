import { cva } from 'class-variance-authority'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error'
  label?: string
}

const inputVariants = cva(
  // Base styles (always applied)
  'w-full px-3 py-2 border rounded-md text-base transition-colors focus:outline-none focus:ring-2 focus:ring-offset-1 disabled:opacity-50 disabled:cursor-not-allowed placeholder:text-neutral-400',
  {
    variants: {
      // variant prop
      variant: {
        default:
          'border-neutral-300 focus:border-primary-500 focus:ring-primary-500',
        error: 'border-error-500 focus:border-error-500 focus:ring-error-500',
      },
    },
    // Default values
    defaultVariants: {
      variant: 'default',
    },
  }
)

export default function Input({
  className,
  variant,
  label,
  ...props
}: InputProps) {
  const id = label ? label.toLowerCase().replace(/\s+/g, '-') : undefined

  return (
    <div className='flex flex-col'>
      {label && (
        <label htmlFor={id} className='mb-1 font-medium'>
          {label}
        </label>
      )}
      <input
        id={id}
        className={cn(inputVariants({ variant }), className)}
        {...props}
      />
    </div>
  )
}

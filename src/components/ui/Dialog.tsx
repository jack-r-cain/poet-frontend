import { cn } from '@/lib/utils'
import { useEffect } from 'react'

interface DialogProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export function Dialog({ open, onClose, children }: DialogProps) {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (open) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      {/* Backdrop */}
      <div className='fixed inset-0 bg-black/50 z-40' onClick={onClose} />

      {/* Dialog */}
      <div className='fixed inset-0 z-50 flex items-center justify-center p-4'>
        <div
          className='bg-white rounded-lg shadow-xl max-w-md w-full'
          onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </>
  )
}

export function DialogContent({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6', className)}>{children}</div>
}

export function DialogTitle({
  className,
  children,
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn('text-xl font-semibold mb-2', className)}>{children}</h2>
  )
}

export function DialogDescription({
  className,
  children,
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-neutral-600 mb-6', className)}>{children}</p>
}

export function DialogFooter({
  className,
  children,
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex gap-3 justify-end', className)}>{children}</div>
  )
}

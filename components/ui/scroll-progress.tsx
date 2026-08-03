import { cn } from '@/lib/utils'

export type ScrollProgressProps = {
  className?: string
}

export function ScrollProgress({ className }: ScrollProgressProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'scroll-progress inset-x-0 top-0 h-1 origin-left',
        className,
      )}
    />
  )
}

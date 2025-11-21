'use client'

export default function Container({ 
  children, 
  size = 'default',
  className = '',
  ...props 
}) {
  const sizes = {
    small: 'max-w-4xl',
    default: 'max-w-7xl',
    large: 'max-w-[1400px]',
    full: 'max-w-full',
  }
  
  return (
    <div 
      className={`${sizes[size]} mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      {...props}
    >
      {children}
    </div>
  )
}

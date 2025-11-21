'use client'

export default function Section({ 
  children, 
  background = 'white',
  padding = 'normal',
  className = '',
  ...props 
}) {
  const backgrounds = {
    white: 'bg-white',
    gray: 'bg-gray-50',
    gradient: 'bg-gradient-to-br from-blue-50 to-purple-50',
    dark: 'bg-gray-900 text-white',
  }
  
  const paddings = {
    none: '',
    small: 'py-12 md:py-16',
    normal: 'py-16 md:py-20',
    large: 'py-20 md:py-28',
  }
  
  return (
    <section 
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
      {...props}
    >
      {children}
    </section>
  )
}

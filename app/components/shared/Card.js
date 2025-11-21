'use client'

export default function Card({ 
  children, 
  hover = true, 
  className = '',
  ...props 
}) {
  const baseStyles = 'bg-white border border-gray-200 rounded-xl p-6 transition-all duration-300'
  const hoverStyles = hover ? 'hover:shadow-xl hover:border-blue-300 hover:-translate-y-1' : ''
  
  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`} {...props}>
      {children}
    </div>
  )
}

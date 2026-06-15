import React from 'react'

export default function Button({ children, className='', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement>){
  return (
    <button {...props} className={`px-4 py-2 rounded-md bg-text text-white ${className}`}>
      {children}
    </button>
  )
}

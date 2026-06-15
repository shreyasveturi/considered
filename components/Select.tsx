import React from 'react'

export default function Select(props: React.SelectHTMLAttributes<HTMLSelectElement>){
  return <select {...props} className="w-full p-2 border border-border rounded-md bg-white" />
}

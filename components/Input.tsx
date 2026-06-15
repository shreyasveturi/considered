import React from 'react'

export default function Input(props: React.InputHTMLAttributes<HTMLInputElement>){
  return <input {...props} className="w-full p-2 border border-border rounded-md bg-white" />
}

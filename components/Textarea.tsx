import React from 'react'

export default function Textarea(props: React.TextareaHTMLAttributes<HTMLTextAreaElement>){
  return <textarea {...props} className="w-full p-2 border border-border rounded-md bg-white" />
}

import React from 'react'

export default function EmptyState({title, subtitle}:{title:string, subtitle?:string}){
  return (
    <div className="card p-6 text-center">
      <div className="font-serif text-lg mb-2">{title}</div>
      {subtitle && <div className="text-muted">{subtitle}</div>}
    </div>
  )
}

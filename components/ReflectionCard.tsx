import React from 'react'

export default function ReflectionCard({verdict, summary}:{verdict:string, summary:string}){
  return (
    <div className="card p-4">
      <div className="text-sm text-muted">Reflection</div>
      <div className="mt-2 font-semibold">{verdict}</div>
      <div className="mt-2 text-sm">{summary}</div>
    </div>
  )
}

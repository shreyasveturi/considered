import React from 'react'

export default function ProgressBar({ percent}:{ percent:number }){
  const p = Math.max(0, Math.min(100, Math.round(percent)))
  return (
    <div className="w-full bg-border rounded-full h-3">
      <div className="bg-taupe h-3 rounded-full" style={{width: `${p}%`}} />
    </div>
  )
}

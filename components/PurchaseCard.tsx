import React from 'react'
import { Purchase } from '../lib/types'

function fmt(v:number){
  return new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(v)
}

export default function PurchaseCard({p}:{p:Purchase}){
  return (
    <div className="card p-3 mb-3">
      <div className="flex items-start justify-between">
        <div>
          <div className="font-semibold">{p.itemName}</div>
          <div className="text-sm text-muted">{p.category} • {new Date(p.createdAt).toLocaleDateString()}</div>
          <div className="mt-2 text-sm">{p.reflectionSummary || p.reason}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold">{fmt(p.price)}</div>
          <div className="text-sm text-muted">{p.reflectionVerdict}</div>
        </div>
      </div>
    </div>
  )
}

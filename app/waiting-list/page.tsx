"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadUser, loadPurchases, savePurchases } from '../../lib/storage'
import PurchaseCard from '../../components/PurchaseCard'
import EmptyState from '../../components/EmptyState'
import { Purchase } from '../../lib/types'

export default function WaitingList(){
  const router = useRouter()
  const [items, setItems] = useState<Purchase[]>([])

  useEffect(()=>{
    const u = loadUser()
    if(!u) router.push('/onboarding')
    const ps = loadPurchases()
    setItems(ps.filter(p=>p.status==='waiting'))
  },[])

  function refresh(){
    const ps = loadPurchases()
    setItems(ps.filter(p=>p.status==='waiting'))
  }

  function updateStatus(id:string, status:'avoided'|'bought'){
    const ps = loadPurchases().map(p => p.id===id ? {...p, status} : p)
    savePurchases(ps)
    refresh()
  }

  function removeItem(id:string){
    const ps = loadPurchases().filter(p=>p.id!==id)
    savePurchases(ps)
    refresh()
  }

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="font-serif text-2xl mb-4">Waiting list</h2>
      {items.length===0 && <EmptyState title="No items waiting" subtitle="You can pause a purchase to add it here." />}
      <div>
        {items.map(p=> (
          <div key={p.id} className="mb-3">
            <PurchaseCard p={p} />
            <div className="flex gap-2">
              <button onClick={()=>updateStatus(p.id,'avoided')} className="px-3 py-1 bg-text text-white rounded-md">Mark as avoided</button>
              <button onClick={()=>updateStatus(p.id,'bought')} className="px-3 py-1 border rounded-md">Mark as bought</button>
              <button onClick={()=>removeItem(p.id)} className="px-3 py-1 border rounded-md">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

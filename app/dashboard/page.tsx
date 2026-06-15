"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { loadUser, loadPurchases } from '../../lib/storage'
import { UserProfile, Purchase } from '../../lib/types'
import GoalCard from '../../components/GoalCard'
import PurchaseCard from '../../components/PurchaseCard'
import EmptyState from '../../components/EmptyState'

export default function Dashboard(){
  const router = useRouter()
  const [user, setUser] = useState<UserProfile | null>(null)
  const [purchases, setPurchases] = useState<Purchase[]>([])

  useEffect(()=>{
    const u = loadUser()
    if(!u){
      router.push('/onboarding')
      return
    }
    setUser(u)
    const ps = loadPurchases()
    setPurchases(ps)
  },[])

  const avoidedTotal = purchases.filter(p=>p.status==='avoided').reduce((s,n)=>s+n.price,0)

  function formatName(){
    return user?.name ? user.name : 'friend'
  }

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="text-sm text-muted">Good evening, {formatName()}</div>
          <div className="font-serif text-2xl">Your considered progress</div>
        </div>
        <div>
          <button onClick={()=>router.push('/pause')} className="px-4 py-2 border rounded-md">Pause a purchase</button>
        </div>
      </div>

      {user && <GoalCard user={user} avoided={avoidedTotal} />}

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <div className="font-semibold">Recent considered choices</div>
        </div>

        {purchases.length === 0 && <EmptyState title="Your first considered choice will appear here." subtitle="Pause once and it will show up here." />}

        <div>
          {purchases.slice().reverse().map(p=> (
            <PurchaseCard key={p.id} p={p} />
          ))}
        </div>
      </div>

      <div className="mt-6 card p-4 text-sm text-muted">
        Small pauses compound. Three avoided purchases of £25 would bring you £75 closer to your goal.
      </div>
    </div>
  )
}

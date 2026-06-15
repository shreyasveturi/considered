"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import { saveUser, savePurchases } from '../../lib/storage'
import { UserProfile } from '../../lib/types'
import { demoUser, demoPurchases } from '../../lib/demo'

export default function Onboarding(){
  const router = useRouter()
  const [name, setName] = useState('')
  const [goalName, setGoalName] = useState('Weekend in Paris')
  const [goalAmount, setGoalAmount] = useState('600')
  const [goalReason, setGoalReason] = useState('')
  const categories = ['Clothes','Beauty','Coffee / food','Subscriptions','Homeware','Wellness','Nights out','Other']
  const [selected, setSelected] = useState<string[]>(['Clothes','Beauty','Coffee / food'])

  useEffect(()=>{
    // load defaults from demo if user wants demo
  },[])

  function toggleCat(c:string){
    setSelected(s => s.includes(c) ? s.filter(x=>x!==c) : [...s,c])
  }

  function handleSubmit(e:React.FormEvent){
    e.preventDefault()
    const user: UserProfile = {
      name: name||'You',
      goalName,
      goalAmount: Math.max(0, Number(goalAmount)||0),
      goalReason: goalReason||undefined,
      categories: selected,
      createdAt: new Date().toISOString()
    }
    saveUser(user)
    // keep purchases if present
    router.push('/dashboard')
  }

  function loadDemo(){
    const u = demoUser()
    const p = demoPurchases()
    saveUser(u)
    savePurchases(p)
    router.push('/dashboard')
  }

  return (
    <div className="max-w-2xl mx-auto py-8">
      <h2 className="font-serif text-2xl mb-4">Welcome — set a goal</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="text-sm text-muted">Your name</label>
          <Input value={name} onChange={e=>setName(e.target.value)} placeholder="Your name" />
        </div>
        <div>
          <label className="text-sm text-muted">Goal name</label>
          <Input value={goalName} onChange={e=>setGoalName(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted">Goal amount (GBP)</label>
          <Input value={goalAmount} onChange={e=>setGoalAmount(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted">Why this goal matters (optional)</label>
          <Textarea value={goalReason} onChange={e=>setGoalReason(e.target.value)} />
        </div>

        <div>
          <div className="text-sm text-muted mb-2">Categories to watch</div>
          <div className="flex flex-wrap gap-2">
            {categories.map(c=> (
              <button type="button" key={c} onClick={()=>toggleCat(c)} className={`px-3 py-1 border rounded-full text-sm ${selected.includes(c)?'bg-taupe text-white':'bg-white'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-text text-white rounded-md">Continue</button>
          <button type="button" onClick={loadDemo} className="px-4 py-2 border rounded-md">Load demo</button>
        </div>
      </form>
    </div>
  )
}

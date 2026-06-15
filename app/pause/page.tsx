"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'
import ReflectionCard from '../../components/ReflectionCard'
import { reflectPurchase } from '../../lib/reflection'
import { loadUser, loadPurchases, savePurchases } from '../../lib/storage'
import { Purchase, UserProfile } from '../../lib/types'

export default function Pause(){
  const router = useRouter()
  const [itemName, setItemName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('Clothes')
  const [reason, setReason] = useState('')
  const [mood, setMood] = useState('')
  const [reflection, setReflection] = useState<{verdict:string, summary:string} | null>(null)
  const [user, setUser] = useState<UserProfile | null>(null)

  useEffect(()=>{
    const u = loadUser()
    setUser(u)
    if(!u) router.push('/onboarding')
  },[])

  function submitReflection(e:React.FormEvent){
    e.preventDefault()
    const priceNum = Number(price)
    if(Number.isNaN(priceNum) || priceNum < 0){
      alert('Please enter a valid price')
      return
    }
    const ref = reflectPurchase({ price: priceNum, category, reason, mood }, user)
    setReflection(ref)
  }

  const [success, setSuccess] = useState<string | null>(null)

  function addAvoided(){
    const ps = loadPurchases()
    const newItem: Purchase = {
      id: `p_${Date.now()}`,
      itemName: itemName || 'Item',
      price: Math.max(0, Number(price)||0),
      category,
      reason,
      mood,
      status: 'avoided',
      createdAt: new Date().toISOString(),
      reflectionVerdict: reflection?.verdict || '',
      reflectionSummary: reflection?.summary || ''
    }
    savePurchases([...ps, newItem])
    // show a brief success microanimation, then redirect
    setSuccess(`A considered choice. ${new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP'}).format(newItem.price)} closer to ${user?.goalName || 'your goal'}.`)
    setTimeout(()=>{
      setSuccess(null)
      router.push('/dashboard')
    }, 1200)
  }

  function markBought(){
    const ps = loadPurchases()
    const newItem: Purchase = {
      id: `p_${Date.now()}`,
      itemName: itemName || 'Item',
      price: Math.max(0, Number(price)||0),
      category,
      reason,
      mood,
      status: 'bought',
      createdAt: new Date().toISOString(),
      reflectionVerdict: reflection?.verdict || '',
      reflectionSummary: reflection?.summary || ''
    }
    savePurchases([...ps, newItem])
    router.push('/dashboard')
  }

  function saveForLater(){
    const ps = loadPurchases()
    const newItem: Purchase = {
      id: `p_${Date.now()}`,
      itemName: itemName || 'Item',
      price: Math.max(0, Number(price)||0),
      category,
      reason,
      mood,
      status: 'waiting',
      createdAt: new Date().toISOString(),
      reflectionVerdict: reflection?.verdict || '',
      reflectionSummary: reflection?.summary || ''
    }
    savePurchases([...ps, newItem])
    router.push('/waiting-list')
  }

  return (
    <div className="max-w-2xl mx-auto py-6">
      <h2 className="font-serif text-2xl mb-4">Pause before the purchase</h2>
      <form onSubmit={submitReflection} className="space-y-4">
        <div>
          <label className="text-sm text-muted">What are you considering buying?</label>
          <Input value={itemName} onChange={e=>setItemName(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted">Price (GBP)</label>
          <Input value={price} onChange={e=>setPrice(e.target.value)} placeholder="e.g. 98" />
        </div>
        <div>
          <label className="text-sm text-muted">Category</label>
          <Select value={category} onChange={e=>setCategory(e.target.value)}>
            <option>Clothes</option>
            <option>Beauty</option>
            <option>Coffee / food</option>
            <option>Subscriptions</option>
            <option>Homeware</option>
            <option>Wellness</option>
            <option>Nights out</option>
            <option>Other</option>
          </Select>
        </div>
        <div>
          <label className="text-sm text-muted">Why do you want it?</label>
          <Textarea value={reason} onChange={e=>setReason(e.target.value)} />
        </div>
        <div>
          <label className="text-sm text-muted">How are you feeling?</label>
          <Select value={mood} onChange={e=>setMood(e.target.value)}>
            <option value="I genuinely need it">I genuinely need it</option>
            <option value="I’ve wanted it for a while">I’ve wanted it for a while</option>
            <option value="I saw it online">I saw it online</option>
            <option value="I’m stressed">I’m stressed</option>
            <option value="I’m bored">I’m bored</option>
            <option value="It feels like a treat">It feels like a treat</option>
            <option value="I’m not sure">I’m not sure</option>
          </Select>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 bg-text text-white rounded-md">Reflect</button>
          <button type="button" onClick={()=>router.push('/dashboard')} className="px-4 py-2 border rounded-md">Cancel</button>
        </div>
      </form>

      {reflection && (
        <div className="mt-6">
          <ReflectionCard verdict={reflection.verdict} summary={reflection.summary} />
          <div className="mt-4 flex gap-3 items-center">
            <div className="flex-1">
              <button onClick={addAvoided} className="px-4 py-2 bg-text text-white rounded-md">Add to avoided spend</button>
              <button onClick={markBought} className="ml-2 px-4 py-2 border rounded-md">I still bought it</button>
              <button onClick={saveForLater} className="ml-2 px-4 py-2 border rounded-md">Save for later</button>
            </div>
            <div>
              {success && (
                <div aria-live="polite">
                  <div className="inline-block">
                    <div className="success-toast toast-enter">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17l-5-5" stroke="#2F2924" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <div className="text-sm ml-2">{success}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

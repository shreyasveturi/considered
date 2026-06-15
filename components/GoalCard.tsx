import React, { useEffect, useRef, useState } from 'react'
import ProgressBar from './ProgressBar'
import { UserProfile } from '../lib/types'

function formatGBP(v:number){
  return new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(v)
}

export default function GoalCard({user, avoided}:{ user: UserProfile, avoided:number }){
  const percent = Math.min(100, (avoided / Math.max(1, user.goalAmount)) * 100)
  const remaining = Math.max(0, user.goalAmount - avoided)
  const prev = useRef<number>(avoided)
  const [pulse, setPulse] = useState(false)

  // trigger a subtle pulse animation when avoided amount increases
  useEffect(()=>{
    if(avoided > prev.current){
      setPulse(true)
      const t = setTimeout(()=>setPulse(false), 700)
      return ()=>clearTimeout(t)
    }
    prev.current = avoided
  },[avoided])

  return (
    <div className={`card p-4 ${pulse? 'goal-pulse':''}`}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-muted text-sm">Goal</div>
          <div className="font-serif text-xl">{user.goalName}</div>
        </div>
        <div className="text-right">
          <div className="text-muted text-sm">Goal amount</div>
          <div className="font-semibold">{formatGBP(user.goalAmount)}</div>
        </div>
      </div>

      <div className="mt-4">
        <ProgressBar percent={percent} />
        <div className="mt-2 text-sm text-muted">You are {formatGBP(avoided)} closer through considered choices.</div>
        <div className="mt-1 text-sm">{Math.round(percent)}% • {formatGBP(remaining)} remaining</div>
      </div>
    </div>
  )
}

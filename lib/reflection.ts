import { Purchase, UserProfile } from './types'

const formatGBP = (v:number) => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'GBP' }).format(v)

type Reflection = {
  verdict: string
  summary: string
  opportunityCost: string
}

// Deterministic local reflection generator.
export function reflectPurchase(p: Pick<Purchase,'price'|'category'|'reason'|'mood'>, user: UserProfile | null): Reflection {
  const price = Math.max(0, Number(p.price) || 0)
  const goal = user?.goalAmount || 1
  const pctOfGoal = Math.min(100, Math.round((price / Math.max(1, goal)) * 100))

  // simple heuristics
  const reason = p.reason || ''
  const mood = p.mood || ''
  const isNeed = /need|essential|replace|broken/i.test(reason)
  const isLongWanted = /want(ed)? for|saved|wishlist|waiting/i.test(reason)
  const isImpulse = /stress|bored|saw it|saw online|urge|impulse/i.test(reason + ' ' + mood)

  let verdict = 'A considered want'
  if(isNeed) verdict = 'Probably necessary'
  else if(isImpulse) verdict = 'Likely an impulse'
  else if(price > goal * 0.25) verdict = 'Worth waiting on'

  if(price === 0) verdict = 'A considered want'

  const summaryParts:string[] = []
  if(isImpulse) summaryParts.push('This feels more like a mood purchase than a need.')
  if(isLongWanted) summaryParts.push('You have wanted this for a while — it may be considered.')
  if(isNeed) summaryParts.push('It looks like this may be necessary.')
  if(!summaryParts.length) summaryParts.push('Give this a day; a little distance often helps.')

  const opportunityCost = user ? `${formatGBP(price)} closer to ${user.goalName}` : `${formatGBP(price)} toward your goal`

  return {
    verdict,
    summary: `${summaryParts.join(' ')} Skipping this would move you ${pctOfGoal}% closer.`,
    opportunityCost
  }
}

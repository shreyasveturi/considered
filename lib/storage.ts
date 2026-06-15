import { Purchase, UserProfile } from './types'

const USER_KEY = 'considered_user'
const PURCHASES_KEY = 'considered_purchases'

export function loadUser(): UserProfile | null {
  try{
    const raw = localStorage.getItem(USER_KEY)
    return raw ? JSON.parse(raw) as UserProfile : null
  }catch(e){
    return null
  }
}

export function saveUser(user: UserProfile){
  localStorage.setItem(USER_KEY, JSON.stringify(user))
}

export function loadPurchases(): Purchase[] {
  try{
    const raw = localStorage.getItem(PURCHASES_KEY)
    return raw ? JSON.parse(raw) as Purchase[] : []
  }catch(e){
    return []
  }
}

export function savePurchases(items: Purchase[]){
  localStorage.setItem(PURCHASES_KEY, JSON.stringify(items))
}

export function resetDemo(){
  localStorage.removeItem(USER_KEY)
  localStorage.removeItem(PURCHASES_KEY)
}

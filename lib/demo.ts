import { UserProfile, Purchase } from './types'

export function demoUser(): UserProfile{
  return {
    name: 'Olivia',
    goalName: 'Weekend in Paris',
    goalAmount: 600,
    goalReason: 'A restful city weekend with friends',
    categories: ['Clothes','Beauty','Coffee / food','Subscriptions','Homeware','Wellness','Nights out'],
    createdAt: new Date().toISOString()
  }
}

export function demoPurchases(): Purchase[]{
  const now = Date.now()
  return [
    { id: 'p1', itemName: 'Matcha latte and pastry', price: 9.8, category: 'Coffee / food', reason: 'Daily treat', mood: 'treat', status: 'avoided', createdAt: new Date(now-1000*60*60*24*5).toISOString(), reflectionVerdict: 'A considered want', reflectionSummary: 'Small pause. Skipping this helps.', },
    { id: 'p2', itemName: 'Zara linen shirt', price: 35, category: 'Clothes', reason: 'saw it online', mood: 'saw it online', status: 'avoided', createdAt: new Date(now-1000*60*60*24*3).toISOString(), reflectionVerdict: 'Likely an impulse', reflectionSummary: 'This looks like an impulse; waiting might help.' },
    { id: 'p3', itemName: 'New water bottle', price: 24, category: 'Homeware', reason: 'needed replacement', mood: 'need', status: 'avoided', createdAt: new Date(now-1000*60*60*24*2).toISOString(), reflectionVerdict: 'Probably necessary', reflectionSummary: 'This seems necessary; consider quality.' },
    { id: 'w1', itemName: 'Alo leggings', price: 98, category: 'Clothes', reason: 'seen on Instagram', mood: 'saw it online', status: 'waiting', createdAt: new Date(now-1000*60*60).toISOString(), reflectionVerdict: 'Likely an impulse', reflectionSummary: 'Waiting 24 hours may help.' }
  ] as Purchase[]
}

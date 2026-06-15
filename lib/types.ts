export type UserProfile = {
  name: string
  goalName: string
  goalAmount: number
  goalReason?: string
  categories: string[]
  createdAt: string
}

export type PurchaseStatus = 'avoided' | 'bought' | 'waiting'

export type Purchase = {
  id: string
  itemName: string
  price: number
  category: string
  reason: string
  mood: string
  status: PurchaseStatus
  createdAt: string
  reflectionVerdict: string
  reflectionSummary: string
}

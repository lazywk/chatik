import { PaymentType } from './common'

export type Transaction = {
  id: number
  name: string
  category: string
  date: string
  amount: number
  type: PaymentType
}

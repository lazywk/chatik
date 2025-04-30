import { PaymentType } from './common'

export type Category = {
  id: number
  name: string
  type: PaymentType
  operations_count: number
}

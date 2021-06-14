import { Transaction } from '../types/merchants'

export const calculateTotalAmount = (data: Transaction[]): string => {
  let total = data.reduce((sum, i) => {
    return sum + i.amount
  }, 0)
  return calculateAmount(total, data[0]?.currency)
}

//  converint cents to dollors and adding the currency symbol before value
export const calculateAmount = (amount: number, currency: string | undefined): string => {
  switch (currency) {
    case 'AUD':
      return `$${(amount/100).toFixed(2)}`
    case 'EURO':
      return `€${(amount / 100).toFixed(2)}`
    default:
      return `${(amount / 100).toFixed(2)}`
  }
}
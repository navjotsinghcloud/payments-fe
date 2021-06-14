import http from './api-handler'
import { Merchant } from '../types/merchants'

export const getAllMerchants = () => {
  return http.get<Merchant[]>("/merchants")
}

export const getMerchantById = (id: string) => {
  return http.get(`/merchants/${id}`);
}
export const getMerchantTransactions = (id: string) => {
  return http.get(`/merchants/transactions/${id}`);
}

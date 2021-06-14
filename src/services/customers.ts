import http from './api-handler'
import { Customer } from '../types/customers'

export const getAllCustomers = () => {
  return http.get<Customer[]>("/customers")
}

export const getCustomerById = (id: string) => {
  return http.get(`/customers/${id}`);
}
export const getCustomerTransactions = (id: string) => {
  return http.get(`/customers/transactions/${id}`);
}
export const createCustomer = (data: any) => {
  return http.post(`/customers`, data);
}

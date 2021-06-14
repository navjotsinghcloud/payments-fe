import React, { useState, useEffect } from 'react';
import { Transaction } from '../../types/merchants'
import { getMerchantTransactions } from '../../services/merchants';
import { calculateAmount } from '../../helpers/transactionHelper';

export const MerchantTransactionList = ({match}: any) => {
  const { id } = match.params;

  const defaultProps: Transaction[] = []
  const [transactions, setTransactions]: [Transaction[], (transactions: Transaction[]) => void] = useState(defaultProps);

  useEffect(() => {
    getMerchantTransactions(id).then(res => {
      setTransactions(res.data)
    })
  }, []);

    return (
        <div>
          <h1>Merchant Transactions</h1>
          <table className="table table-striped">
              <thead>
                  <tr>
                      <th style={{ width: '30%' }}>Description</th>
                      <th style={{ width: '30%' }}>Date</th>
                      <th style={{ width: '30%' }}>Amount</th>
                      <th style={{ width: '10%' }}></th>
                  </tr>
              </thead>
              <tbody>
                  {transactions && transactions.map(transaction =>
                      <tr key={transaction.id}>
                          <td>{transaction.description}</td>
                          <td>{transaction.date}</td>
                          <td>{calculateAmount(transaction.amount, transaction.currency)}</td>
                      </tr>
                  )}
                  {!transactions &&
                      <tr>
                          <td colSpan={4} className="text-center">
                              <div className="spinner-border spinner-border-lg align-center"></div>
                          </td>
                      </tr>
                  }
                  {transactions && !transactions.length &&
                      <tr>
                          <td colSpan={4} className="text-center">
                              <div className="p-2">No Transactions To Display</div>
                          </td>
                      </tr>
                  }
              </tbody>
          </table>
        </div>
    );
}


const calculateTotalAmount = (data: Transaction[]): number => {
  return data.reduce((sum, i) => {
    return sum + i.amount
  }, 0)
}
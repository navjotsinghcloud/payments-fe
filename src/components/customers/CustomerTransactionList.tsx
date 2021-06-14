import React, { useState, useEffect } from 'react';
import { Transaction } from '../../types/merchants'
import { getCustomerTransactions } from '../../services/customers';
import { calculateTotalAmount, calculateAmount } from '../../helpers/transactionHelper';

export const CustomerTransactionList = ({match}: any) => {
  const { id } = match.params;

  const defaultProps: Transaction[] = []
  const [transactions, setTransactions]: [Transaction[], (transactions: Transaction[]) => void] = useState(defaultProps);
  const [totalAmount, setTotalAmount] = useState('0');

  useEffect(() => {
    getCustomerTransactions(id).then(res => {
      setTransactions(res.data)
      setTotalAmount(calculateTotalAmount(res.data))
    })
  }, []);

    return (
        <div>
          <h1>Customer Transactions</h1>
          <p>Total amount { totalAmount}</p>
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


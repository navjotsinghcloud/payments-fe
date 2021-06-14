import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CustomerDetails } from '../../types/customers'
import { getAllCustomers } from '../../services/customers';

export const CustomerList = ({match}: any) => {
  const { path } = match;

  const defaultProps: CustomerDetails[] = []
  const [customers, setCustomers]: [CustomerDetails[], (customers: CustomerDetails[]) => void] = useState(defaultProps);

  useEffect(() => {
    getAllCustomers().then(res => {
      setCustomers(res.data)
    })
  }, []);

    return (
        <div>
            <h1>Customers</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Merchant Details</th>
                        <th style={{ width: '30%' }}>Transaction Details</th>
                    </tr>
                </thead>
                <tbody>
                    {customers && customers.map(customer =>
                        <tr key={customer.id}>
                          <td>{customer.name}</td>
                          <td>
                          {customer.merchantId && <Link to={`/merchants/${customer.merchantId}`} className="link-primary mr-1">{customer.merchantName}</Link>}
                          </td>
                          <td style={{ whiteSpace: 'nowrap' }}>
                            <Link to={`${path}/transactions/${customer.id}`} className="link-primary mr-1">View Transactions</Link>
                          </td>
                        </tr>
                    )}
                    {!customers &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {customers && !customers.length &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="p-2">No Customers To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

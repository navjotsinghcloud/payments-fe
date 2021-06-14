import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Merchant } from '../../types/merchants'
import { getAllMerchants } from '../../services/merchants';

export const MerchantList = ({match}: any) => {
  const { path } = match;

  const defaultProps: Merchant[] = []
  const [merchants, setMerchants]: [Merchant[], (merchants: Merchant[]) => void] = useState(defaultProps);

  useEffect(() => {
    getAllMerchants().then(res => {
      setMerchants(res.data)
    })
  }, []);

    return (
        <div>
            <h1>Merchants</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{ width: '30%' }}>Name</th>
                        <th style={{ width: '30%' }}>Is trading</th>
                        <th style={{ width: '30%' }}>Currency</th>
                        <th style={{ width: '10%' }}>Transactions</th>
                    </tr>
                </thead>
                <tbody>
                    {merchants && merchants.map(merchant =>
                        <tr key={merchant.id}>
                          <td>{merchant.name}</td>
                          <td>{merchant.isTrading ? 'Yes' : 'No'}</td>
                          <td>{merchant.currency}</td>
                          <td style={{ whiteSpace: 'nowrap' }}>
                            <Link to={`${path}/transactions/${merchant.id}`} className="link-primary mr-1">View Transactions</Link>
                          </td>
                          <td style={{ whiteSpace: 'nowrap' }}>
                            <Link to={`${path}/addcustomer/${merchant.id}`} className="btn btn-sm btn-primary mr-1">Add Customer</Link>
                        </td>
                        </tr>
                    )}
                    {!merchants &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {merchants && !merchants.length &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="p-2">No Merchants To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

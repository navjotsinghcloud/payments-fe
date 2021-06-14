import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Merchant } from '../../types/merchants'
import { getMerchantById } from '../../services/merchants';

export const MerchantDetails = ({match}: any) => {
  const { path } = match;
  const { id } = match.params;

  const defaultProps: Merchant = {
    name: '',
    isTrading: false,
    currency: '',
    id: ''
  }
  const [merchant, setMerchant]: [Merchant, (merchant: Merchant) => void] = useState(defaultProps);

  useEffect(() => {
    getMerchantById(id).then(res => {
      setMerchant(res.data)
    })
  }, []);

    return (
        <div>
            <h1>Merchant Details</h1>
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
                    {merchant && 
                        <tr key={merchant.id}>
                          <td>{merchant.name}</td>
                          <td>{merchant.isTrading ? 'Yes' : 'No'}</td>
                          <td>{merchant.currency}</td>
                          <td style={{ whiteSpace: 'nowrap' }}>
                            <Link to={`transactions/${merchant.id}`} className="link-primary mr-1">View Transactions</Link>
                          </td>
                        </tr>
                    }
                    {!merchant &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="spinner-border spinner-border-lg align-center"></div>
                            </td>
                        </tr>
                    }
                    {!merchant  &&
                        <tr>
                            <td colSpan={4} className="text-center">
                                <div className="p-2">No Merchants Details To Display</div>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
        </div>
    );
}

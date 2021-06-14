import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { createCustomer } from '../../services/customers'
export const AddCustomer = ({history, match }: any) => {
    const { id } = match.params;
    const [values, setValues] = useState({
      name: ''
    })
  
  function onSubmit(e: any) {
    e.preventDefault()
    setValues(values)
      createCustomer({...values, merchantId: id })
      .then(() => {
          history.push('/customers');
      })
        .catch(e => {
        
      })
    }
    return (
        <form onSubmit={onSubmit}>
            <h1>Add Customer</h1>
            <div className="form-row">
                <div className="form-group col-5">
                    <label>Customer Name</label>
                    <input 
                      name="name" 
                      type="text" 
                      className='form-control' 
                      value={values.name}
                      onChange={e => setValues({...values, name: e.target.value})}
                    />
                </div>
            </div>
            <div className="form-group">
              <input 
                className='submitButton'
                type='submit' 
                value='Add Customer'
                disabled={!values.name}
              />
                <Link to='..' className="btn btn-link">Cancel</Link>
            </div>
      </form>
    );
}

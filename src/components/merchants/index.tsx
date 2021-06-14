import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { MerchantList } from './MerchantList'
import { MerchantTransactionList } from './MerchantTransactionList'
import { MerchantDetails } from './Merchant'
import { AddCustomer } from './AddCustomer'
export const Merchants = ({ match }: any) => {
    const { path } = match;
    return (
        <Switch>
            <Route exact path={path} component={MerchantList} />
            <Route path={`${path}/transactions/:id`} component={MerchantTransactionList} />
            <Route path={`${path}/addcustomer/:id`} component={AddCustomer} />
            <Route path={`${path}/:id`} component={MerchantDetails} />
        </Switch>
    );
}

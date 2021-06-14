import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { CustomerList } from './CustomerList'
import { CustomerTransactionList } from './CustomerTransactionList'
export const Customers = ({ match }: any) => {
    const { path } = match;
    
    return (
        <Switch>
            <Route exact path={path} component={CustomerList} />
            <Route path={`${path}/transactions/:id`} component={CustomerTransactionList} />
            {/* <Route path={`/merchants/:id`} component={CustomerTransactionList} /> */}
        </Switch>
    );
}

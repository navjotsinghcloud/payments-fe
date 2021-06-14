import React from 'react';
import { Link } from 'react-router-dom';

export const  Home = () => {
    return (
        <div>
            <h1>Hi welcome to payments</h1>
            <p>Please explore the site.</p>
            <p><Link to="customers">&gt;&gt; Customers</Link></p>
        </div>
    );
}
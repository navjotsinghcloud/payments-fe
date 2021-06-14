import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <div className="navbar-nav">
                <NavLink exact to="/" className="nav-item nav-link">Home</NavLink>
                <NavLink to="/customers" className="nav-item nav-link">Customers</NavLink>
                <NavLink to="/merchants" className="nav-item nav-link">Merchants</NavLink>
            </div>
        </nav>
    );
}

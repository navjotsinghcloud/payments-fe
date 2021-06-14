import React from 'react';
import './App.css';
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Home } from './components'
import { Customers } from './components/customers'
import { Merchants } from './components/merchants'
function App() {
  return (
    <div className="app-container bg-light">
      <Nav />
      <div className="container pt-4 pb-4">
          <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/customers" component={Customers} />
              <Route path="/merchants" component={Merchants} />
          </Switch>
      </div>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/Homepage'
import ShopPage from './pages/shop/Shop'

import './app.css'

function App() {
  return (
    <div className="App">
        <Switch >
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
    </div>
  );
}

export default App;

import React from 'react';
import { Route } from 'react-router-dom'

import HomePage from './pages/Homepage'

import './app.css'

function App() {
  return (
    <div className="App">
        <Route exact path="/" component={HomePage} />
    </div>
  );
}

export default App;

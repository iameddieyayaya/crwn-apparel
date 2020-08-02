import React from 'react';
import { Route, Switch } from 'react-router-dom'

import HomePage from './pages/Homepage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import Header from './components/header/Header'
import { auth } from './firebase/firebase.utils'

import './app.css'

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubcribedFromAuth = null;;

  componentDidMount(){
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user })

      console.log(user)
    })
  }

  componentWillUnmount(){
    this.unsubcribedFromAuth();
  }

  render() {
    return (
      <div className="App">
          <Header currentUser={this.state.currentUser} />
          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/signin" component={SignInAndSignUpPage} />
          </Switch>
      </div>
    );
  }

}

export default App;

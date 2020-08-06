import React from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import HomePage from './pages/Homepage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import Header from './components/header/Header'
import { auth , createUserProfileDocument } from './firebase/firebase.utils'
import { setCurrentUser } from './redux/user/user.actions'

import './app.css'

class App extends React.Component {

  unsubcribedFromAuth = null;;

  componentDidMount(){
    const { setCurrentUser } = this.props

    auth.onAuthStateChanged(async userAuth => {

      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)

        userRef.onSnapshot(snapShot => { 
            setCurrentUser({
                 id: snapShot.id,
                 ...snapShot.data()
            })
        })
      } else {
        //set user to null; 
        setCurrentUser(userAuth)
      }
    })
  }

  componentWillUnmount(){
    this.unsubcribedFromAuth();
  }

  render() {
    return (
      <div className="App">
          <Header />
          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/signin" render={() => this.props.currentUser ? (<Redirect to="/" />) : <SignInAndSignUpPage /> } />
          </Switch>
      </div>
    );
  }

}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

import React, { useEffect } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import HomePage from './pages/Homepage'
import ShopPage from './pages/shop/Shop'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/SignInAndSignUpPage'
import CheckoutPage from './pages/checkout/Checkout'

import Header from './components/header/Header'
import { auth , createUserProfileDocument } from './firebase/firebase.utils' //addCollectionAndDocuments
import { setCurrentUser } from './redux/user/user.actions'
import { selectCurrentUser } from './redux/user/user.selector'
// import { selectCollectionsForPreview } from './redux/shop/shop.selectors'

import './app.css'

const App = ({setCurrentUser, currentUser}) =>  {


  useEffect(() => {


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
        // addCollectionAndDocuments('collections', collectionsArray.map(({title, items}) => ({title, items})) )  //CODE WAS USED TO ADD DOCUMENT TO FIREBASE.
      }
    })
  }, [setCurrentUser])


    return (
      <div className="App">
          <Header />
          <Switch >
            <Route exact path="/" component={HomePage} />
            <Route path="/shop" component={ShopPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route exact path="/signin" render={() => currentUser ? (<Redirect to="/" />) : <SignInAndSignUpPage /> } />
          </Switch>
      </div>
    );

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionsArray: selectCollectionsForPreview //CODE WAS USED TO ADD DOCUMENT TO FIREBASE.
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);

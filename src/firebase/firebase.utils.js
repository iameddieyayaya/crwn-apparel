import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// Importing some not all of the firebase, since its HUGE

const config = {
    apiKey: "AIzaSyB7D6q6zjYikeYEiF-vab0DlwoWJuQfz0c",
    authDomain: "crwn-app-cfad9.firebaseapp.com",
    databaseURL: "https://crwn-app-cfad9.firebaseio.com",
    projectId: "crwn-app-cfad9",
    storageBucket: "crwn-app-cfad9.appspot.com",
    messagingSenderId: "212249056206",
    appId: "1:212249056206:web:dc0396f73ff3ce24e3519f",
    measurementId: "G-N1YDCK2VBW"
  };

  export const createUserProfileDocument = async (userAuth, additionalData) => {
      //no user - exit 
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`)

      const snapShot = await userRef.get();

        //if snapShot does not exit
        // create doc
      if(!snapShot.exists){
        //documentRed obj to perform our CRUD methods. create, retrieve, update, delete.
          const { displayName, email } = userAuth;
          const createdAt = new Date();

          try {
            await userRef.set({
              displayName,
              email,
              createdAt,
              ...additionalData
            })
          } catch (error) {
              console.log('error creating user', error.message)
          }

      }

      return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
// import { UPDATE_COLLECTIONS } from './shop.types'
import 
{ 
    FETCH_COLLECTIONS_START,
    FETCH_COLLECTIONS_SUCCESS,
    FETCH_COLLECTIONS_FAIL
    
} from './shop.types'

import {
    firestore,
    convertCollectionsSnapshotToMap
  } from '../../firebase/firebase.utils';


export const fetchCollectionsStart = () => ({
    type: FETCH_COLLECTIONS_START
})

export const fetchCollectionsSuccess = (collectionsMap) => ({
    type: FETCH_COLLECTIONS_SUCCESS,
    payload: collectionsMap
})

export const fetchCollectionsFail = (errorMessage) => ({
    type: FETCH_COLLECTIONS_FAIL,
    payload: errorMessage
})

export const fetchCollectionsStartAsync = () => dispatch => {
    const collectionRef = firestore.collection('collections');

    //calls this when its start @isLoading = true
    dispatch(fetchCollectionsStart())

    //fetches data.
    collectionRef
      .get()
      .then(snapshot => {
        const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
      })
      .catch(error => dispatch(fetchCollectionsFail(error.message)));
}
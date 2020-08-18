import React from 'react';
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions'
import { selectIsCollectionsLoad } from '../../redux/shop/shop.selectors'


import CollectionsOverviewContainer from '../../components/collections-overview/CollectionsOverviewContainer';
import CollectionsContainer from '../collection/CollectionContainer';

// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);  //abstracted out to CollectionsOverviewContainer
// const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends React.Component {
    state = {
        loading: true
    }
    
    unsubcribeFromSnapshot = null;

    componentDidMount(){

        const { fetchCollectionsStartAsync } = this.props
        fetchCollectionsStartAsync();

        //note: abstracted this to redux-thunk. 

        // const { updateCollections } = this.props;
        // const collectionRef = firestore.collection('collections')

        // //supernested -
        // // fetch(`https://firestore.googleapis.com/v1/projects/crwn-app-cfad9/databases/(default)/documents/collections`)
        // //     .then(response => response.json())
        // //     .then(collections => console.log(collections))


        // // instead of using .onSnapShot which is an 'observable' we can use 
        // // .get which is Promised based. No live updating only works when its mounted.
        // this.unsubcribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //             const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //             updateCollections(collectionsMap)
        //             this.setState({ loading: false })
        //         })
    }
    
    render() {
        const { match, isCollectionsLoaded } = this.props;

        return (
            <div className="shop-page">
                {/* /shop/:category */}
                <Route 
                    exact 
                    path={`${match.path}`} 
                    // render={props => <CollectionsOverviewWithSpinner isLoading={isCollectionFetching} {...props} /> } //abstracted
                    component={CollectionsOverviewContainer}
                />
                <Route 
                    path={`${match.path}/:collectionId`}
                    // render={props => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props} />}    
                    component={CollectionsContainer}
                />
            </div>
        )
        
    }
}

//abstracted out
// const mapStateToProps = createStructuredSelector({
//     // isCollectionFetching: selectIsCollectionFetching,
//     // isCollectionsLoaded: selectIsCollectionsLoad
// })


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);
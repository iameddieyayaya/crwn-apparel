import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selectors'
import WithSpinner from '../with-spinner/WithSpinner'
import CollectionsOverview from './CollectionsOverview'

const mapStateToProps = createStructuredSelector({
    //name matches prop name expected in WithSpinner
    isLoading: selectIsCollectionFetching
});

// const CollectionsOverviewContainer = connect(mapStateToProps)(WithSpinner(CollectionsOverview))
// ^ samething as the line above. Chain functions together
const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)


export default CollectionsOverviewContainer;
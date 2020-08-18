import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { compose } from 'redux'

import { selectIsCollectionsLoad } from '../../redux/shop/shop.selectors'
import WithSpiiner from '../../components/with-spinner/WithSpinner'
import CollectionsPage from './Collection'

const mapStateToProps = createStructuredSelector({
                        //returns false. True load's the spinner
                        //Hence, the bang
    isLoading: state => !selectIsCollectionsLoad(state)
})

const CollectionsContainer = compose(
    connect(mapStateToProps),
    WithSpiiner
)(CollectionsPage)

export default CollectionsContainer;
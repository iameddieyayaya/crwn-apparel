import React from 'react';
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectDirectorySections } from '../../redux/directory/directory.selectors'

import MenuItem from '../menu-item/Menu-item'

import './directory.styles.scss'

const Directory = ({ sections }) => (
    <div className="directory-menu">
        {
           sections.map(({id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps} /> //spreading these values where the keys is the same.
              
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory)

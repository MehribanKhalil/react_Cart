import React from 'react'
import './index.scss'


const PagesHeader = ({pageTitle}) => {
    return (
        <div id='pages_header'>
            <h2>{pageTitle}</h2>
            {/* <h5>Shop</h5> */}
        </div>
    )
}

export default PagesHeader
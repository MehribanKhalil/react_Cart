import React from 'react'
import './index.css'
const BasketCart = ({name,price}) => {
  return (
    <div  className='basketCart'>
        <h2>name</h2>
        <p>price</p>
        <div>
            <button>+</button>
            <button>-</button>
        </div>
    </div>
  )
}

export default BasketCart

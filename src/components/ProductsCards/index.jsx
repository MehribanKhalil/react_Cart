import React from 'react'

const ProductsCard = ({procId,procName,procPrice}) => {
  return (
    <div>
      <div>
        <h2>{procId}</h2>
      </div>
      <div>
        <p>{procName}</p>
      </div>
      <div>
        <p>{procPrice}</p>
      </div>
      <button>add basket</button>
    </div>
  )
}

export default ProductsCard

import React from 'react'
import './index.scss'

const ProductsCard = ({ img, category, name, price, status }) => {

  const getBgColor = () => {
    switch (status) {
      case "New":
        return 'green_bg'

      case "Out of Stock":
        return 'gray_bg'

      case "Top":
        return 'blue_bg'

      default:
        return "";
    }
  }

  return (
    <div className='col-12 col-md-6 col-lg-4 mb-4'>

      <div id='product_card' className="text-center">
        <div className='product_img'>
          <img src={img} alt="" />
          {
            status &&
            <span className={`product_status ${getBgColor()}`}>{status}</span>
          }
        </div>

        <div className='product_content'>
          <p className='product_category'>{category}</p>
          <h5><a href="" className='product_name'>{name}</a></h5>
          <p className={`product_price ${status==='Out of Stock' && 'out_stock' }`}>${price}</p>
        </div>
      </div>

    </div>

  )
}

export default ProductsCard

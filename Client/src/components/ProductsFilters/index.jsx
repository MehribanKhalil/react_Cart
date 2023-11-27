import React from 'react'
import FilerByCategory from '../FilterByCategory'
import FilterBySize from '../FilterBySize'
import FilterByColor from '../FilterByColor'

const ProductsFilters = ({ handleCategoryFilter ,handleSizeFilter ,handleClear}) => {
  
  return (
    <div className='py-3'>
        <div className="d-flex justify-content-between mb-3">
            <p>Filters:</p>
            <p onClick={handleClear}>Clean All</p>
        </div>

        <FilerByCategory handleCategoryFilter={handleCategoryFilter} />
        <FilterBySize handleSizeFilter={handleSizeFilter} />

    </div>
  )
}

export default ProductsFilters
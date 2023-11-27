import React, { useState } from 'react'
import PagesHeader from '../../components/PagesHeader'
import Products from '../../components/Products'
import Accardion from '../../components/Accardion'
import ProductsFilters from '../../components/ProductsFilters'

const Shop = () => {
  // const [selectedFilters, setSelectedFilters] = useState({
  //   category: '',
  //   color: '',
  //   brand:'',
  //   size:'',
  //   price:''
  // });
  const [filteredCategory, setFilteredCategory] = useState([])
  const [filteredSize, setFilteredSize] = useState([])


  const handleCategoryFilter = (categories) => {
    setFilteredCategory(categories)
  }
  const handleSizeFilter = (size) => {
    setFilteredSize(size)
  }


  const handleClear=()=>{
    handleCategoryFilter([])
    handleSizeFilter([])
  }
  return (
    <div>
      <PagesHeader pageTitle="Shop" />

      <div className='shop_content'>
        <div className="container">
          <div className="row">
            <div className='col-12 col-md-4 col-lg-3'>
            <ProductsFilters handleClear={handleClear} handleCategoryFilter={handleCategoryFilter} handleSizeFilter={handleSizeFilter}  />
            </div>
            <div className='col-12 col-md-8 col-lg-9'>
            <Products filteredCategory={filteredCategory} filteredSize={filteredSize} />

            </div>
          </div>
       

        </div>
      </div>
    </div>
  )
}

export default Shop
// import './App.css'
import { useFetch } from './hooks/useFetch'
import Shop from './pages/Shop'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/main.scss'
import ProductsCard from './components/ProductsCard';
import Accardion from './components/Accardion';
import { useEffect, useState } from 'react';

function App() {

  const [selectedCategories, setSelectedCategories] = useState([]);

 

  const handleCategoryFilter = (e) => {
    const value = e.target.value;
    const isChecked=e.target.checked
    if (isChecked) {
      setSelectedCategories([...selectedCategories, value]);
    } else {
      setSelectedCategories(selectedCategories.filter((category) => category !== value));
    }
  };

  const cleanFilter=()=>{
    setSelectedCategories([])
  }

  return (
    <>
      <Shop/>

      {/* <div className="p-5">
        <div className="row">
          <div className='col-12 col-md-3'>
            <div className="d-flex justify-content-between">
              <p>Filters:</p>
              <p onClick={(e)=>cleanFilter()}>Clean All</p>
            </div>

            <div>
              <Accardion
                accardionTitle="Filter by Category"
                accardionContent={
                  <div>
                    <label className="d-block">
                    <input type="checkbox" value="Dresses"  onChange={e => handleCategoryFilter(e)} />
                    Dresses
                  </label>

                  <label  className="d-block">
                    <input type="checkbox" value="Bags"   onChange={(e)=>handleCategoryFilter(e)} />
                    Bags
                  </label>

                  <label  className="d-block">
                    <input type="checkbox" value="Jackets"   onChange={(e)=>handleCategoryFilter(e)} />
                    Jackets
                  </label>
                  </div>
                }
              />
            </div>

          </div>
          <div className='col-12 col-md-9'>

          <div id='sorted_products' className="d-flex justify-content-between pb-4">
                <div>
                  <p>Showing 9 of 56 Products</p>
                </div>

                <div className="d-flex">
                  <p>Sort by:</p>
                  <div>
                    <div name="" id="">
                      <button onClick={(e)=>handleSort(e)} value="low">low</button>
                      <button onClick={(e)=>handleSort(e)} value="high">high</button>
                    </div>
                  </div>
                </div>
          </div>

            <div id="products">
              <div className="product_container row">
                {
                  isLoading ? <p>Loading...</p>
                    :
                    sortedProducts.filter((item)=>selectedCategories.length === 0 || selectedCategories.includes(item.category)).map((product) => (
                      <ProductsCard
                        key={product.id}
                        {...product}
                      />
                    ))
                }
              </div>
            </div>
          </div>
        </div>


      </div> */}
    </>
  )
}

export default App

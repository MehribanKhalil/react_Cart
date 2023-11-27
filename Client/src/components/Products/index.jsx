import React, { useEffect, useState } from "react";
import ProductsCard from "../ProductsCard";
import './index.scss'
import { useFetch } from "../../hooks/useFetch";

const Products = ({ filteredCategory, filteredSize }) => {
  const baseUrl = "http://localhost:5000/products"
  const [products, isLoading] = useFetch(baseUrl)
  const [currentPage, setCurrentPage] = useState(1);
  const [perPageData] = useState(3);
  const [sortedProducts, setSortedProducts] = useState([])


  const filteredProduct =
    products?.filter(
      product =>
        (filteredCategory.length === 0 || filteredCategory.includes(product?.category)) &&
        (filteredSize.length === 0 || filteredSize.includes(product?.size))
    ) || []

  const handleSort = (e) => {
    const value = e.target.value;
    setSortedProducts(value)
  }

  const sortedProduct = [...filteredProduct].sort((a, b) => {
    if (sortedProducts === 'low') {
      return a.price - b.price
    }
    if (sortedProducts === 'high') {
      return b.price - a.price
    }
    return 0
  })


  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(sortedProduct.length / perPageData); i++) {
    pageNumbers.push(i);
  }

  const lastElementIndex = perPageData * currentPage;
  const firstElementIndex = lastElementIndex - perPageData;

  const pageData = (sortedProduct || []).slice(firstElementIndex, lastElementIndex);

  return (
    <div id="products">

      <div id='sorted_products' className="d-flex justify-content-between pb-4">
        <div>
          <p>Showing {sortedProduct.length} of {products.length} Products</p>
        </div>

        <div className="d-flex align-items-center">
          <p className="p-3">Sort by:</p>
          <div>
            <select onChange={(e) => handleSort(e)} className="form-select">
              <option value="low">low to high</option >
              <option value="high">high to low</option>
            </select>
          </div>
        </div>
      </div>


      <div className="product_container row">
        {
          isLoading ? <p>Loading...</p>
            :
            pageData.map((product) => (
              <ProductsCard
                key={product.id}
                {...product}
              />
            ))
        }
      </div>

      <div className="text-center">
        {pageNumbers.map((page) => (
          <button className="btn btn-outline-dark m-1" key={page} onClick={() => setCurrentPage(page)}>
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Products;

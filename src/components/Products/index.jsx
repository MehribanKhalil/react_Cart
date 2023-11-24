import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductsCard from "../ProductsCards";
import './index.css'

const Products = () => {
  const [products, setProducts] = useState([]);

  function getProducts() {
    fetch("https://northwind.vercel.app/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
        <div className="product_container" >
      {products.map((item) => (
        
          <ProductsCard
          key={item.id}
            procId={item.id}
            procName={item.name}
            procPrice={item.unitPrice}
          />
        
      ))}</div>
    </div>
  );
};

export default Products;

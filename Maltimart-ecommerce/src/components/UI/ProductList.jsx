

import React from 'react'
import ProductCard from './ProductCard'

const ProductList = ({data}) => {
  return (
    <>
    {data && data.map((item)=>{
      return <ProductCard item />
    })}
   
    </>
  )
}

export default ProductList;

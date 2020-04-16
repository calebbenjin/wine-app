import React from 'react'
import Products from './Product'

const ProductList = ({ products, loading }) => {
  if(loading) {
    return <h2>Loading...</h2>
  }
  if(products.length < 1 ) {
    return <h2>No item matched your search criteria</h2>
  }
  return (
    <section className="section">
      <h2 className="section-title">Latest Wine</h2>
      <div className="cocktails-center">
        {products.map(item => {
          return <Products key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default ProductList;
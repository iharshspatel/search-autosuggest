import React from 'react'

const Product = ({product}) => {
  return (
    <div className='productContainer'>
      <img src='https://placehold.co/100x100'/>
      <p>
      {product.name}
        <br/>
      ₹ {product.price}
      </p>
      </div>
  )
}

export default Product
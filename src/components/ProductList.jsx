import React from 'react';

export const ProductList = ({products}) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <a href={product.link_product} key={product._id}>
          <div className="product-item" >
            <img src={product.product_img} alt="img" />
            <h3>{product.title}</h3>
            <p>Harga : Rp.{product.price}</p>
          </div>
        </a>
      ))}
    </div>
  )
}

export default ProductList;
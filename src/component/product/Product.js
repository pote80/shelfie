import React from 'react';

const Product = props => {
  return (
  <div> 
      <div><img src={props.product.img_url}></img></div>
      <h1>{props.product.product_name}</h1>
      <h3>${props.product.price}</h3>
  </div>
  );
}
export default Product;

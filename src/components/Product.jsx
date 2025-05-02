import React from 'react'

const Product = ({image, price, description, title}) => {
  return (
    <li className="product">
      <div className="img-div">
        <img src={image} alt="product-image"/>
      </div>
      <article className="product-details"> 
        <h3 className="title">{title}</h3>
        <p className="product-desc">{description}</p>
        <p className="price">&#8358;{price}</p>
      </article>
    </li>
  )
}

export default Product
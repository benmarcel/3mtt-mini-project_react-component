import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <ul className="products">
      {products &&
        products.map((product) => {
          const { id, image, price, title, description } = product;
          return (
            <Product
              key={id}
              image={image}
              price={price}
              title={title}
              description={description}
            />
          );
        })}
    </ul>
  );
};

export default Products;

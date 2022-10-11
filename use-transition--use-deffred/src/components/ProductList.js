import React, { useDeferredValue } from "react";

const ProductList = ({ products }) => {
  const deferredProducts = useDeferredValue(products);
  return (
    <div>
      {deferredProducts.map((product, index) => {
        return (
          <div className="testi" key={index}>
            <div>
              <p>{product.text}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;

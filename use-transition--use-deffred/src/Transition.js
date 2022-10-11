import React, { useEffect, useState, useTransition } from "react";
import ProductList from "./components/ProductList";
import { data } from "./assets/data";

const Transition = () => {
  const [isPending, startTransition] = useTransition();
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFinteredProducts] = useState(data);

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
  };

  useEffect(() => {
    if (!inputValue) {
      setFinteredProducts(data);
    }
    setFinteredProducts(data.filter((el) => el.text.includes(inputValue)));
  }, [inputValue]);

  return (
    <div>
      <div className="valore">
        <input type="text" onChange={handleChange} />
      </div>
      {isPending ? (
        <h4>Loading List</h4>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
};

export default Transition;

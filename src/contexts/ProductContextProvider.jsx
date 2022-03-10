import React, { createContext, useState } from "react";
import { first, second, third, fourth } from "../components/filter/FilterData";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [sum, setSum] = useState(0);
  const addValue = (value) => setSum(sum + parseInt(value));
  const filterDatas = [first, second, third, fourth];

  const [getfilteredItem, setGetfilteredItem] = useState("");
  const filterFunction = (arr, id) => {
    arr.forEach((item) => {
      if (item.id === id) setGetfilteredItem("filter-btn-clicked");
    });
  };
  return (
    <ProductContext.Provider
      value={{ addValue, sum, filterDatas, filterFunction, getfilteredItem }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

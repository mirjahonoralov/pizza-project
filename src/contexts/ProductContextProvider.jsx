import React, { createContext, useEffect, useState } from "react";
import { filterData, filterMenus } from "../components/filter/FilterData";
const btns = document.getElementsByClassName("filter-btn");

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [sum, setSum] = useState(0);
  const [updatedFilterData, setUpdatedFilterData] = useState(filterData);
  const [salesCardProducts, setSalesCardProducts] = useState([]);

  const increaseProductCount = (item) => {
    let index;
    console.log("salesCardProducts: ", salesCardProducts);
    salesCardProducts.map((product, id) => {
      if (product.id === item.id) {
        index = salesCardProducts.indexOf(product);
        console.log("salesCardProducts[index]", salesCardProducts[index]);
        salesCardProducts[index].count += 1;
        setSalesCardProducts(salesCardProducts);
        // console.log("index", index);
      }
    });
    console.log("new salesCardProducts", salesCardProducts);
    // setSalesCardProducts(salesCardProducts);
  };

  const addProduct = (item) => {
    setSalesCardProducts([...salesCardProducts, item]);
    setSum(sum + parseInt(item.price));
  };

  const filterFunction = (itemId) => {
    let id;
    updatedFilterData.filter((item) => {
      if (item.id === itemId) id = updatedFilterData.indexOf(item);
    });
    btns[id].style = "background-color: #ff7010; color: #fff";
  };

  return (
    <ProductContext.Provider
      value={{
        addProduct,
        sum,
        updatedFilterData,
        filterMenus,
        filterFunction,
        salesCardProducts,
        increaseProductCount,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

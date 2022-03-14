import React, { createContext, useState } from "react";
import { filterData, filterMenus } from "../components/filter/FilterData";
const btns = document.getElementsByClassName("filter-btn");

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [sum, setSum] = useState(0);
  const [updatedFilterData, setUpdatedFilterData] = useState(filterData);
  const [salesCardProducts, setSalesCardProducts] = useState([]);

  const productCounter = (item, action) => {
    let value = 0,
      index;
    if (action === "increase") {
      value = 1;
      setSum(sum + parseInt(item.price));
    } else if (action === "decrease" && item.count > 0) {
      value = -1;
      setSum(sum - parseInt(item.price));
    }
    salesCardProducts.map((product) => {
      if (product.id === item.id) index = salesCardProducts.indexOf(product);
    });

    setSalesCardProducts(
      salesCardProducts.map((product, id) => {
        if (id === index) {
          if (product.count === 0 && action === "decrease") return product;
          product.count += value;
          return product;
        } else return product;
      })
    );
  };

  const addProduct = (item) => {
    let isSameProduct = false;
    salesCardProducts.map((product) => {
      if (product.id === item.id) {
        product.count += 1;
        setSalesCardProducts(salesCardProducts);
        isSameProduct = true;
      }
    });

    if (!isSameProduct) {
      item.count = 1;
      setSalesCardProducts([...salesCardProducts, item]);
    }
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
        productCounter,
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;

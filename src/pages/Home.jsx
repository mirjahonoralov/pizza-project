import React from "react";
import Cards from "../components/cards/Cards";
import Info from "../components/Info";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import SearchBar from "../components/SearchBar";
import ProductContextProvider from "../contexts/ProductContextProvider";

const Home = () => {
  return (
    <ProductContextProvider>
      <Navbar />
      <Cards />
      <SearchBar />
      <Products />
      <Info />
    </ProductContextProvider>
  );
};

export default Home;

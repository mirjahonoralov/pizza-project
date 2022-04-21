import React, { useState, useContext } from "react";
import Cards from "../components/cards/Cards";
import Info from "../components/Info";
import Navbar from "../components/navbar/Navbar";
import Products from "../components/products/Products";
import SearchBar from "../components/SearchBar";
import { ProductContext } from "../contexts/ProductContextProvider";
import card from "../assets/icons/Group 94.png";
import { MobileCardBtn } from "../components/SaleBtn";
import Footer from "../components/footer/Footer";

const Home = () => {
  const { salesCardProducts } = useContext(ProductContext);
  const [width, setWidth] = useState(window.innerWidth);
  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <>
      <Navbar />
      <Cards />
      <SearchBar />
      <Products />
      <Info />
      <Footer />

      {/* mobileBtn */}
      {width < 576 && (
        <MobileCardBtn icon={card} count={salesCardProducts.length} />
      )}
      {/* mobileBtn */}
    </>
  );
};

export default Home;

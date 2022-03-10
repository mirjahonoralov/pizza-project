import React from "react";
import Fillter from "../filter/Fillter";
import ProductGroup from "./ProductGroup";
import { DessertsData, PizzaData, SushiData, ZapuskData } from "./ProductsData";

const Products = () => {
  return (
    <section>
      <div className="container">
        <Fillter product="Пицца" />
        <ProductGroup data={PizzaData} />

        <Fillter product="Суши" />
        <ProductGroup data={SushiData} />

        <h1 className="my-4">Закуски</h1>
        <ProductGroup data={ZapuskData} />

        <h1 className="my-4">Десерты</h1>
        <ProductGroup data={DessertsData} />
      </div>
    </section>
  );
};

export default Products;

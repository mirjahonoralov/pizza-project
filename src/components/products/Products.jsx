import React from "react";
import Fillter from "../filter/Fillter";
import ProductGroup from "./ProductGroup";
import { DessertsData, PizzaData, SushiData, ZapuskData } from "./ProductsData";

const Products = () => {
  return (
    <section>
      <div className="container">
        <Fillter product="Пицца" id="pizza" />
        <ProductGroup data={PizzaData} />

        <Fillter product="Суши" id="sushi" />
        <ProductGroup data={SushiData} />

        <h1 className="my-4" id="snack">
          Закуски
        </h1>
        <ProductGroup data={ZapuskData} />

        <h1 className="my-4" id="dessert">
          Десерты
        </h1>
        <ProductGroup data={DessertsData} />
      </div>
    </section>
  );
};

export default Products;

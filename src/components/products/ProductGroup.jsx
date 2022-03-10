import React from "react";
import PruductCard from "./PruductCard";

const ProductGroup = ({ data }) => {
  return (
    <div className="row d-flex">
      {data.map((item, id) => {
        return <PruductCard key={id} {...item} />;
      })}
    </div>
  );
};

export default ProductGroup;

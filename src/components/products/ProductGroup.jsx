import React from "react";
import PruductCard from "./PruductCard";

const ProductGroup = ({ data }) => {
  return (
    <div className="row d-flex">
      {data.map((product, id) => {
        return <PruductCard key={id} product={product} />;
      })}
    </div>
  );
};

export default ProductGroup;

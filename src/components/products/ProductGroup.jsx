import React, { useState } from "react";
import MIniProductCard from "./MiniProductCard";
import PruductCard from "./PruductCard";

const ProductGroup = ({ data }) => {
  const [width, setWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => setWidth(window.innerWidth));

  return (
    <div className={width > 576 ? "row" : ""}>
      {data.map((product, id) => {
        if (width > 576) return <PruductCard key={id} product={product} />;
        else return <MIniProductCard key={id} product={product} />;
      })}
    </div>
  );
};

export default ProductGroup;

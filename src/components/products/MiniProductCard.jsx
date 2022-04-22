import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";

const MIniProductCard = ({ product }) => {
  const { img, title, price, desc, defaultSize, count } = product;
  const { addProduct } = useContext(ProductContext);

  return (
    <div
      className="d-flex p-3 align-items-center border mb-3 bg-white"
      style={{ borderRadius: "12px", boxSizing: "border-box" }}
    >
      <img src={img} alt="" style={{ width: "30%" }} />
      <div className="d-flex flex-column align-items-start ms-2">
        <p className="fw-bold mb-1">{title}</p>
        <p className="mb-1">
          {desc} {defaultSize} sm
        </p>
        <span
          className="fw-bold rounded-3"
          style={{
            color: "#ff7010",
            padding: "5px 15px",
            background: "#FFEEE2",
            display: "block",
            cursor: "pointer",
          }}
          onClick={() => addProduct(product)}
        >
          {price} ₽
          {count > 0 && <span className="ms-2 badge bg-warning">{count}</span>}
        </span>
      </div>
    </div>
  );
};

export default MIniProductCard;

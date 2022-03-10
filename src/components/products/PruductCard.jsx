import React, { useContext, useState } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import Button from "../Button";

const PruductCard = ({ img, title, text, price, isNew }) => {
  const { addValue } = useContext(ProductContext);
  const [isDisabled, setIsDisabled] = useState(false);
  const clicked = (value) => {
    addValue(value);
    setIsDisabled("disabled");
  };

  return (
    <div className="col-3 p-3">
      <div
        className="bg-white d-flex flex-column justify-content-between border"
        style={{ position: "relative", height: "480px", borderRadius: "12px" }}
      >
        {isNew && (
          <button
            className="btn btn-sm btn-danger"
            style={{ position: "absolute", left: 0, top: "15px" }}
          >
            New
          </button>
        )}
        <img src={img} alt="" style={{ width: "100%" }} />
        <div className="p-3">
          <h5 className="fw-bold">{title}</h5>
          <p>{text}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div onClick={() => clicked(price)}>
              <Button value="Выбрать" isDisabled={isDisabled} />
            </div>
            <span className="fw-bold" style={{ color: "#ff7010" }}>
              от {price} ₽
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PruductCard;

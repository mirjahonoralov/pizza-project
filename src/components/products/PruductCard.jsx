import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import Button from "../Button";
import ProductModal from "./ProductModal";

const PruductCard = ({ product }) => {
  const { img, title, text, price, isNew } = product;
  const { addProduct } = useContext(ProductContext);

  return (
    <>
      <div className="col-sm-6 col-md-4 col-lg-3 p-2 p-lg-3">
        <div
          className="bg-white d-flex flex-column justify-content-between border"
          style={{
            position: "relative",
            height: "480px",
            borderRadius: "12px",
          }}
        >
          {isNew && (
            <button
              className="btn btn-sm btn-danger"
              style={{ position: "absolute", left: 0, top: "15px" }}
            >
              New
            </button>
          )}

          {/* ------- modal btn ------ */}
          <img
            src={img}
            alt=""
            style={{ width: "100%" }}
            data-bs-toggle="modal"
            data-bs-target="#product-modal"
          />

          <div className="p-3">
            <h5 className="fw-bold">{title}</h5>
            <p>{text}</p>
            <div className="d-flex justify-content-between align-items-center">
              <div
                onClick={() => addProduct(product)}
                style={{ position: "relative" }}
              >
                <Button value="Выбрать" />
                {product.count > 0 && (
                  <div
                    className="badge bg-secondary rounded-pill position-absolute"
                    style={{ right: "-10px", top: "-10px" }}
                  >
                    {product.count}
                  </div>
                )}
              </div>
              <span className="fw-bold" style={{ color: "#ff7010" }}>
                от {price} ₽
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ------modal-------- */}
      {/* <ProductModal img={img} /> */}
    </>
  );
};

export default PruductCard;

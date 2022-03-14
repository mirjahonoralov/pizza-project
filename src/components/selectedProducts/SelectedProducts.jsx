import React, { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";
import Button from "../Button";
import SelectedProduct from "./SelectProduct";

const SelectedProducts = () => {
  const { salesCardProducts, sum } = useContext(ProductContext);
  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="saleCard"
      aria-labelledby="offcanvasRightLabel"
    >
      <div className="offcanvas-body">
        <div className="d-flex justify-content-between align-items-center">
          <h2>Ваш заказ</h2>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {salesCardProducts &&
          salesCardProducts.map((product, id) => (
            <SelectedProduct key={id} product={product} />
          ))}

        <div className="d-flex justify-content-between align-items-center">
          <span className="fw-bold fs-5" style={{ color: "#ff7010" }}>
            Итого: {sum} ₽
          </span>
          <Button value="Оформить заказ" />
        </div>
      </div>
    </div>
  );
};

export default SelectedProducts;

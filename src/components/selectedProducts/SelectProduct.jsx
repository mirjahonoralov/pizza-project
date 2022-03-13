import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContextProvider";

const SelectedProduct = ({ product }) => {
  const { img, title, price, desc, defaultSize, count } = product;
  const { increaseProductCount } = useContext(ProductContext);

  return (
    <div
      className="d-flex p-3 align-items-center border mb-3"
      style={{ borderRadius: "12px" }}
    >
      <img src={img} alt="" style={{ width: "30%" }} />
      <div className="d-flex flex-column ms-2">
        <p className="fw-bold mb-1">{title}</p>
        <p className="mb-1">
          {desc} {defaultSize} sm
        </p>
        <div className="d-flex justify-content-between">
          <div
            className="btn-group rounded-3"
            style={{ backgroundColor: "#FFEEE2" }}
          >
            <button type="button" className="btn btn-sm ">
              -
            </button>
            <button type="button" className="btn btn-sm ">
              {count}
            </button>
            <button
              type="button"
              className="btn btn-sm"
              onClick={() => increaseProductCount(product)}
            >
              +
            </button>
          </div>
          <span className="fw-bold" style={{ color: "#ff7010" }}>
            {price} ₽
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectedProduct;

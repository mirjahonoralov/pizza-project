import React, { useState } from "react";
import Button from "../Button";
import { productModalIcons } from "./ProductsData";
import Fire from "../../assets/icons/Fire.png";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import "./ProductModal.css";
import Modal from "react-modal/lib/components/Modal";
const [icon1, icon2, icon3, icon4, icon5, icon6, icon7] = productModalIcons;

const ProductModal = ({ img }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    // <>
    //   <button onClick={() => setModalIsOpen(true)}>MODAL</button>
    //   <Modal
    //     isOpen={modalIsOpen}
    //     onRequestClose={() => setModalIsOpen(false)}
    //     style={{
    //       overlay: {},
    //       content: {
    //         position: "absolute",
    //         width: "40%",
    //         left: "60%",

    //         height: "100%",
    //         top: "0px",
    //         zIndex: 9999999999,
    //       },
    //     }}
    //   >
    //     <div className="modal_header">
    //       <h3>Ваш заказ</h3>
    //       <button onClick={() => setModalIsOpen(false)}>X</button>
    //     </div>
    //     <div className="modal_item">
    //       <p>text</p>
    //     </div>
    //   </Modal>
    // </>
    <div
      className="modal fade p-5"
      id="product-modal"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div
            className="d-flex gap-3 bg-white p-4 ps-0"
            style={{ borderRadius: "24px" }}
          >
            <button
              type="button"
              data-bs-dismiss="modal"
              className="btn btn-sm close-btn"
              aria-label="Close"
            >
              <GrClose />
            </button>

            <div className="d-flex w-50 m-auto">
              <img src={img} alt="" style={{ width: "100%" }} />
            </div>
            <div className="d-flex flex-column" style={{ width: "50%" }}>
              <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                  <img src={Fire} alt="" />
                  <span className="fw-bold ms-2">Пепперони по-деревенски</span>
                </div>
                <AiOutlineInfoCircle />
              </div>
              <div className="icons d-flex justify-content-between">
                <div className="p-3 rounded-3 border">
                  <img src={icon1} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon2} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon3} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon4} alt="" />
                </div>
              </div>
              <div className="row text-center">
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Моцарелла
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Огурцы маринованные
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Пепперони
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Томатный соус
                </div>
              </div>
              <div className="btn-group mt-3" role="group">
                <Button value="Традиционное" padding="8px 30px" />
                <Button value="Тонкое" padding="8px 60px" outline="true" />
              </div>

              <div className="btn-group mt-3" role="group">
                <Button value="20sm" padding="5px 40px" />
                <Button value="28sm" padding="5px 40px" outline="true" />
                <Button value="33sm" padding="5px 40px" outline="true" />
              </div>

              <p className="fw-bold my-3">Добавьте в пиццу</p>
              <div className="icons d-flex gap-3  justify-content-between">
                <div className="p-3 rounded-3 border">
                  <img src={icon1} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon5} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon6} alt="" />
                </div>
                <div className="p-3 rounded-3 border">
                  <img src={icon7} alt="" />
                </div>
              </div>

              <div className="row text-center">
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Моцарелла
                  <p className="fw-bold" style={{ color: "#ff7010" }}>
                    59 ₽
                  </p>
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Шампиньоны
                  <p className="fw-bold" style={{ color: "#ff7010" }}>
                    59 ₽
                  </p>
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Красный лук
                  <p className="fw-bold" style={{ color: "#ff7010" }}>
                    59 ₽
                  </p>
                </div>
                <div className="col-3 mt-1" style={{ fontSize: "12px" }}>
                  Сладкий перец
                  <p className="fw-bold" style={{ color: "#ff7010" }}>
                    59 ₽
                  </p>
                </div>
              </div>

              <div className="d-flex mt-0 justify-content-between">
                <div>
                  <span className="fs-5 fw-bold" style={{ color: "#ff7010" }}>
                    Итого: 379 ₽
                  </span>
                  <span className="ms-3 opacity-75">400 г</span>
                </div>
                <Button value="Добавить" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;

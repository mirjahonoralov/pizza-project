import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #ff7010;
  border: none;
  color: #fff;
  cursor: pointer;
`;

const MobileBtn = styled.button`
  border-radius: 100%;
  padding: 15px;
  background-color: #ff7010;
  border: none;
  color: #fff;
  cursor: pointer;
  position: sticky;
  bottom: 20px;
  left: 80%;

  span {
    position: absolute;
    /* top: 10px; */
    border: 1px solid #ff7010;
  }
`;

const SaleBtn = ({ value, icon }) => {
  return (
    <Btn
      data-bs-toggle="offcanvas"
      data-bs-target="#saleBtn"
      aria-controls="saleBtn"
      className="d-none d-sm-block"
    >
      {icon && <img src={icon} alt="" className="me-1" />} {value} ₽
    </Btn>
  );
};

export const MobileCardBtn = ({ icon, count }) => {
  return (
    <MobileBtn
      data-bs-toggle="offcanvas"
      data-bs-target="#saleBtn"
      aria-controls="saleBtn"
    >
      {icon && <img src={icon} alt="" />}
      <span className="badge bg-white text-dark rounded-circle top-0">
        {count}
      </span>
    </MobileBtn>
  );
};

export default SaleBtn;

import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  background-color: #ff7010;
  border: none;
  color: #fff;
  /* border: ${(props) => (props.outline ? "1px solid #ff7010" : "nones")}; */
  cursor: pointer;
`;

const SaleBtn = ({ value, icon }) => {
  return (
    <Btn
      data-bs-toggle="offcanvas"
      data-bs-target="#saleCard"
      aria-controls="offcanvasRight"
    >
      {icon && <img src={icon} alt="" className="me-1" />} {value} ₽
    </Btn>
  );
};

export default SaleBtn;

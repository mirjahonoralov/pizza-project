import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
  padding: 8px 16px;
  background-color: ${(props) => (props.disabled ? "#ffa970" : "#ff7010")};
  background-color: ${(props) => (props.outline ? "#fff" : "#ff7010")};
  border: none;
  color: ${(props) => (props.outline ? "#ff7010" : "#fff")};
  border: ${(props) => (props.outline ? "1px solid #ff7010" : "nones")};
`;

const Button = ({ value, icon, isDisabled, outline }) => {
  return (
    <Btn disabled={isDisabled} outline={outline}>
      {icon && <img src={icon} alt="" className="me-1" />} {value}
    </Btn>
  );
};

export default Button;

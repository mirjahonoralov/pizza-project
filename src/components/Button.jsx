import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  border-radius: 4px;
  padding: ${({ padding }) => (padding ? padding : "8px 16px")};

  background-color: ${({ disabled, outline }) => {
    if (disabled) return "#ffa970";
    else if (outline) return "#fff";
    else return "#ff7010";
  }};

  border: none;
  color: ${(props) => (props.outline ? "#ff7010" : "#fff")};
  border: ${(props) => (props.outline ? "1px solid #ff7010" : "nones")};
  cursor: pointer;
  :hover {
    background-color: #ff7010;
    color: #fff;
  }
`;

const Button = ({ value, isDisabled, outline, padding }) => {
  return (
    <Btn disabled={isDisabled} outline={outline} padding={padding}>
      {value}
    </Btn>
  );
};

export default Button;

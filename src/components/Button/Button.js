import React from "react";
import { ButtonStyled } from "./Button.styles";
const Button = ({ children, handleOnClick, ...props }) => {
  return (
    <ButtonStyled onClick={handleOnClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

export default Button;

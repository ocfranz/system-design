import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./Button.styles";

const Button = ({ children, handleOnClick, ...props }) => {
  return (
    <ButtonStyled onClick={handleOnClick} {...props}>
      {children}
    </ButtonStyled>
  );
};

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element,
  ]).isRequired,
  handleOnClick: PropTypes.func.isRequired,
};

export default Button;

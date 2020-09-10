import React from "react";
import PropTypes from "prop-types";
import { InputWrapper, InputLabel, InputStyled } from "./Input.styles";
const Input = ({ id, value, onChange, placeholder, error, success }) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id}></InputLabel>
      <InputStyled
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        success={success}
      />
    </InputWrapper>
  );
};
Input.defaultProps = {
  value: "",
  placeholder: "",
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default Input;

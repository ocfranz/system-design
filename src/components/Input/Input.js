import React from "react";
import PropTypes from "prop-types";
import { InputWrapper, InputLabel, InputStyled } from "./Input.styles";
const Input = ({
  id,
  value,
  onChange,
  placeholder,
  error,
  success,
  label,
  labeled,
}) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id} labeled={labeled}>
        {label}
      </InputLabel>
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
  labeled: false,
  label: "Label",
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  labeled: PropTypes.bool,
  label: PropTypes.string,
};

export default Input;

import React from "react";
import PropTypes from "prop-types";
import {
  InputWrapper,
  InputLabel,
  InputStyled,
  InputMessage,
} from "./Input.styles";
const Input = ({
  id,
  type,
  value,
  onChange,
  placeholder,
  error,
  success,
  label,
  labeled,
  message,
  showMessage,
}) => {
  return (
    <InputWrapper>
      <InputLabel htmlFor={id} labeled={labeled}>
        {label}
      </InputLabel>
      <InputStyled
        type={type}
        value={value}
        id={id}
        onChange={onChange}
        placeholder={placeholder}
        error={error}
        success={success}
      />
      <InputMessage showMessage={showMessage} error={error} success={success}>
        {message}
      </InputMessage>
    </InputWrapper>
  );
};
Input.defaultProps = {
  value: "",
  placeholder: "",
  labeled: false,
  label: "Label",
  message: "",
  showMessage: false,
  type: "text",
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  labeled: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  showMessage: PropTypes.bool,
};

export default Input;

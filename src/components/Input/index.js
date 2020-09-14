/**
 * Input.js
 * Render a common input, if you pass it a prop "icon" it will render a input within icon otherwise
 * it'll render a input
 *
 */
import React from "react";
import PropTypes from "prop-types";
import {
  InputLabel,
  InputStyled,
  InputMessage,
  IconInputStyled,
} from "./Input.styles";
import { colors } from "../../styles/colors";
import { Wrapper, IconWrapper } from "./Wrapper";
import ErrorIcon from "./ErrorIcon";
import SuccessIcon from "./SuccessIcon";

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
  icon,
  childrenIcon,
}) => {
  let input = (
    <InputStyled
      type={type}
      value={value}
      id={id}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
      success={success}
      spellCheck={false}
    />
  );
  if (icon)
    input = (
      <IconWrapper>
        {error && <ErrorIcon color={colors.error} />}
        {success && <SuccessIcon color={colors.success} />}
        {!error && !success && childrenIcon}
        <IconInputStyled
          value={value}
          type={type}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          success={success}
          spellCheck={false}
        />
      </IconWrapper>
    );
  return (
    <Wrapper icon={icon}>
      <InputLabel htmlFor={id} labeled={labeled}>
        {label}
      </InputLabel>
      {input}
      <InputMessage showMessage={showMessage} error={error} success={success}>
        {message}
      </InputMessage>
    </Wrapper>
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
  icon: false,
};
Input.propTypes = {
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  labeled: PropTypes.bool,
  label: PropTypes.string,
  message: PropTypes.string,
  icon: PropTypes.bool,
  childrenIcon: PropTypes.element,
  showMessage: PropTypes.bool,
};

export default Input;

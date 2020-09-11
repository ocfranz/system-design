import React from "react";
import PropTypes from "prop-types";
import {
  IconInputLabel,
  IconInputWrapper,
  IconInputStyled,
  IconInputMessage,
  IconInputContainer,
} from "./IconInput.styles";
import ErrorIcon from "./ErrorIcon";
import SuccessIcon from "./SuccessIcon";
import { colors } from "../../styles/colors";
const IconInput = ({
  childrenIcon,
  id,
  value,
  onChange,
  label,
  placeholder,
  error,
  success,
  showMessage,
  message,
}) => {
  return (
    <IconInputWrapper>
      <IconInputLabel>{label}</IconInputLabel>
      <IconInputContainer error={error} success={success}>
        {error && <ErrorIcon color={colors.error} />}
        {success && <SuccessIcon color={colors.success} />}
        {!error && !success && childrenIcon}
        <IconInputStyled
          value={value}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          success={success}
        />
      </IconInputContainer>

      <IconInputMessage
        showMessage={showMessage}
        error={error}
        success={success}
      >
        {message}
      </IconInputMessage>
    </IconInputWrapper>
  );
};

IconInput.propTypes = {
  childrenIcon: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default IconInput;

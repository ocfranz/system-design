import React from "react";
import PropTypes from "prop-types";
import {
  IconInputLabel,
  IconInputWrapper,
  IconInputStyled,
} from "./IconInput.styles";
const IconInput = ({
  childrenIcon,
  id,
  value,
  onChange,
  placeholder,
  error,
  success,
}) => {
  return (
    <IconInputWrapper>
      <IconInputLabel>
        {childrenIcon}
        <IconInputStyled
          value={value}
          id={id}
          onChange={onChange}
          placeholder={placeholder}
          error={error}
          success={success}
        />
      </IconInputLabel>
    </IconInputWrapper>
  );
};

IconInput.propTypes = {
  childrenIcon : PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
};

export default IconInput;

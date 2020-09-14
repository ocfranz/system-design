import React from "react";
import PropTypes from "prop-types";

import { SelectStyled, OptionStyled, LabelStyled } from "./Select.styles";
import { Wrapper } from "./Wrapper";
const Select = ({
  label,
  labeled,
  id,
  options,
  onOptionSelected,
  defaultValue,
}) => {

  return (
    <Wrapper>
      <LabelStyled labeled={true} htmlFor={id}>
        {label}
      </LabelStyled>
      <SelectStyled id={id} onChange={(e)=> onOptionSelected(e.target.value)}>
        <OptionStyled>{defaultValue}</OptionStyled>
        {options.map((option) => (
          <OptionStyled key={option}>{option}</OptionStyled>
        ))}
      </SelectStyled>
    </Wrapper>
  );
};

Select.defaultProps = {
  options: [],
  defaultValue: "Select an option"
};

Select.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  defaultValue : PropTypes.string,
  options: PropTypes.array.isRequired,
  onOptionSelected: PropTypes.func.isRequired,
};

export default Select;

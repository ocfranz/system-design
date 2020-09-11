import styled from "styled-components";
import { colors } from "../../styles/colors";
const InputWrapper = styled.div``;

const InputLabel = styled.label`
  visibility: hidden;
`;
const InputStyled = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  color: ${(props) => {
    if (props.error) return colors.error;
    if (props.success) return colors.success;
    return colors.darK;
  }};
  border: ${(props) => {
    if (props.success) return `1px solid ${colors.success}`;
    if (props.error) return `1px solid ${colors.error}`;
    return "1px solid rgba(228, 228, 228, 0.6)";
  }};
  &:hover {
    filter: ${(props) => {
      if (props.success)
        return "drop-shadow(0px 8px 8px rgba(0, 196, 140, 0.08))";
      if (props.error)
        return "drop-shadow(0px 8px 8px rgba(255, 100, 124, 0.08))";
      return "drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06))";
    }};
  }
  &:focus {
    outline: none;
    box-shadow: none;
    filter: ${(props) => {
      if (props.success)
        return "drop-shadow(0px 8px 8px rgba(0, 196, 140, 0.08))";
      if (props.error)
        return "drop-shadow(0px 8px 8px rgba(255, 100, 124, 0.08))";
      return "drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06))";
    }};
  }

  ::placeholder {
    color: ${colors.gray};
    text-transform: capitalize;
  }

  :-ms-input-placeholder {
    color: ${colors.gray};
  }

  ::-ms-input-placeholder {
    color: ${colors.gray};
  }
`;

export { InputWrapper, InputLabel, InputStyled };
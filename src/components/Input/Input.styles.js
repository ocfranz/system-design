import styled from "styled-components";
import { colors } from "../../styles/colors";
import { extensions } from "../../styles/minxins";

const InputLabel = styled.label`
  visibility: ${(props) => (props.labeled ? "visible" : "hidden")};
  font-size: 15px;
  padding-bottom: 5px;
  display: ${(props) => (props.labeled ? "block" : "none")};
`;
const InputStyled = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  padding: 16px 20px;
  font-size: 16px;
  line-height: 18px;
  width: 100%;
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
    ${(props) => {
      if (props.success)
        return extensions(
          "filter",
          "drop-shadow(0px 8px 8px rgba(0, 196, 140, 0.08))"
        );
      if (props.error)
        return extensions(
          "filter",
          "drop-shadow(0px 8px 8px rgba(255, 100, 124, 0.08))"
        );
      return extensions(
        "filter",
        "drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06))"
      );
    }}
  }
  &:focus {
    outline: none;
    box-shadow: none;
    ${(props) => {
      if (props.success)
        return extensions(
          "filter",
          "drop-shadow(0px 8px 8px rgba(0, 196, 140, 0.08))"
        );
      if (props.error)
        return extensions(
          "filter",
          "drop-shadow(0px 8px 8px rgba(255, 100, 124, 0.08))"
        );
      return extensions(
        "filter",
        "drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)) drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06))"
      );
    }}
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

const InputMessage = styled.span`
  color: ${(props) => {
    if (props.error) return colors.error;
    return colors.success;
  }};
  display: block;
  padding: 5px 0px 0px 0px;
  font-size: 15px;
  display: ${(props) => (props.showMessage ? " block" : "none")};
`;

const IconInputStyled = styled(InputStyled)`
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  margin-left: 10px;
  border: none;
  box-shadow: none;
  padding: 0px;
  outline: none;
  filter: initial;
  &:hover {
    filter: initial;
  }
  &:focus {
    filter: initial;
  }
`;

export { InputLabel, InputStyled, InputMessage, IconInputStyled };

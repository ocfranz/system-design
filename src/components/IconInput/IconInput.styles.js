import styled from "styled-components";
import { colors } from "../../styles/colors";
import {
  InputStyled,
  InputWrapper,
  InputLabel,
  InputMessage,
} from "../Input/Input.styles";

const IconInputStyled = styled.input`
  box-sizing: border-box;
  border-radius: 5px;
  font-size: 16px;
  line-height: 18px;
  font-weight: normal;
  margin-left: 10px;
  border: none;
  color: ${(props) => {
    if (props.error) return colors.error;
    if (props.success) return colors.success;
    return colors.darK;
  }};
  &:focus {
    outline: none;
    box-shadow: none;
  }
`;
const IconInputWrapper = styled(InputWrapper)``;
const IconInputLabel = styled(InputLabel)``;
const IconInputMessage = styled(InputMessage)``;
const IconInputContainer = styled.div`
  display: flex;
  align-items: center;
  border: ${(props) => {
    if (props.success) return `1px solid ${colors.success}`;
    if (props.error) return `1px solid ${colors.error}`;
    return "1px solid rgba(228, 228, 228, 0.6)";
  }};
  padding: 11px 18px;
  border-radius: 5px;
`;

export {
  IconInputLabel,
  IconInputWrapper,
  IconInputStyled,
  IconInputMessage,
  IconInputContainer,
};

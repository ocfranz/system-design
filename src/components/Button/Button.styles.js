import styled from "styled-components";
import { colors } from "../../styles/colors";
const ButtonStyled = styled.button`
  display: inline-block;
  box-sizing: border-box;
  padding: 14px 30px;
  text-decoration: none;
  border-radius: 5px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  text-transform: capitalize;
  font-size: 16px;
  opacity: ${(props) => {
    if (props.disabled) return "0.5";
    return "1";
  }};
  background-color: ${(props) => {
    if (props.outline) return "transparent";
    if (props.secondary) return colors.secondary;
    if (props.success) return colors.success;
    if (props.error) return colors.error;
    return colors.info;
  }};
  color: ${(props) => {
    if (props.outline) return colors.info;
    return "#ffffff";
  }};
  border: ${(props) => {
    if (props.outline) return `1px solid ${colors.info}`;
    return "none";
  }};
  pointer-events: ${(props) => {
    if (props.disabled) return "none";
    return "all";
  }};
  filter: drop-shadow(0px 4px 4px rgba(50, 50, 71, 0.08)),
    drop-shadow(0px 4px 8px rgba(50, 50, 71, 0.06));
`;
export { ButtonStyled };

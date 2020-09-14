import styled from "styled-components";
import Chevron from "./chevron-down.png";
import { colors } from "../../styles/colors";
const SelectStyled = styled.select`
  border: none;
  width: 100%;
  font-size: 16px;
  line-height: 16px;
  padding: 16px 20px;
  border: 1px solid rgba(228, 228, 228, 0.6);
  -webkit-appearance: none;
  -moz-appearance: none;
  background: transparent;
  background-image: url(${Chevron});
  background-repeat: no-repeat;
  background-position-x: calc(100% - 15px);
  background-position-y: 50%;
  border-radius: 5px;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: none;
    color: ${colors.info};
    border: 1px solid ${colors.info} !important;
  }
  &::ms-expand {
    display: none;
  }
`;
const OptionStyled = styled.option`
  border: none;
  padding: 16px 0px 16px 0px;
`;

const LabelStyled = styled.label`
  display: ${(props) => (props.labeled ? "block" : "none")};
  font-size: 15px;
  padding-bottom: 5px;
`;
export { SelectStyled, OptionStyled, LabelStyled };

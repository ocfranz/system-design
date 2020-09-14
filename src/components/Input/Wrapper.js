import styled from "styled-components";
import { colors } from "../../styles/colors";
const Wrapper = styled.div`
  width: 100%;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  border: ${(props) => {
    if (props.success) return `1px solid ${colors.success}`;
    if (props.error) return `1px solid ${colors.error}`;
    return "1px solid rgba(228, 228, 228, 0.6)";
  }};
  padding: 14px 18px;
  border-radius: 5px;
`;
export { Wrapper, IconWrapper };

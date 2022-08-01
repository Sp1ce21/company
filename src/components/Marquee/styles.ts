import styled from "styled-components";
import { colors } from "../../constants/colors";

export const MarqueeContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 9.38vw;
  width: 100vw;
  overflow: hidden;
`;
export const Line = styled.div`
  border-top: 0.05vw solid ${colors.grey};
  width: 100%;
`;

export const MarqueeItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 1.82vw;
  width: 9.38vw;
  svg {
    display: flex;
  }
`;

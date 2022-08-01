import styled from "styled-components";
import { colors } from "../../constants/colors";

export const MarqueeContainer = styled.section`
  display: flex;
  flex-direction: column;
  height: 9.38vw;
  width: 100vw;
  overflow: hidden;

  @media (max-width: 425px) {
    height: 20vw;
  }
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
  @media (max-width: 425px) {
    height: 15vw;
    width: 20vw;
  }
  svg {
    display: flex;
  }
`;

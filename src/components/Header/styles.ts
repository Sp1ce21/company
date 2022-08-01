import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-self: center;
  color: ${colors.lightBlack};
  height: 10.5vh;
  position: relative;
`;

export const LeftPart = styled.div`
  display: flex;
  align-items: center;
`;
export const Logo = styled.div`
  font-weight: 700;
  line-height: 150%;
  font-size: 1.88vw;
  padding-right: 2.34vw;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    left: -2.14vw;
    top: -40%;
    border-left: 0.05vw ${colors.grey} solid;
    height: 190%;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -40%;
    border-right: 0.05vw ${colors.grey} solid;
    height: 160%;
  }
`;
export const HeaderText = styled.div`
  margin-left: 1.82vw;
  font-size: 0.78vw;
  line-height: 120%;
  letter-spacing: 0.05vw;
`;
export const RightPart = styled.div`
  align-self: center;
`;
export const Navigation = styled.nav``;
export const List = styled.ul`
  display: flex;
  column-gap: 3.02vw;
  align-items: center;
`;
export const Point = styled.li`
  display: flex;
`;

export const HeaderLink = styled.a`
  cursor: pointer;
  font-weight: 600;
  font-size: 0.78vw;
  line-height: 150%;
  color: ${colors.black};
`;

export const LinkButton = styled.div`
  font-weight: 500;
  font-size: 0.73vw;
  padding: 0.78vw 0 0.57vw;
  width: 11.46vw;
  display: flex;
  justify-content: center;
  border: 0.05vw solid ${colors.lightBlack};
  border-radius: 1.82vw;
  cursor: pointer;
`;

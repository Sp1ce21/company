import styled from "styled-components";
import { colors } from "../../constants/colors";

export const HeaderBlock = styled.header`
  display: flex;
  justify-content: space-between;
  align-self: center;
  color: ${colors.lightBlack};
  height: 10.5vh;
  position: relative;

  @media (max-width: 1024px) {
    height: 11vh;
  }

  @media (max-width: 768px) {
    height: 12vh;
  }

  @media (max-width: 425px) {
    height: 10vh;
  }
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
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    left: -2.14vw;
    top: -40%;
    border-left: 0.05vw ${colors.grey} solid;
    height: 175%;
  }
  &::after {
    content: "";
    position: absolute;
    right: 0;
    top: -40%;
    border-right: 0.05vw ${colors.grey} solid;
    height: 140%;

    @media (max-width: 1024px) {
      height: 130%;
    }
  }

  @media (max-width: 1024px) {
    font-size: 3vw;
  }

  @media (max-width: 768px) {
    font-size: 4vw;
  }

  @media (max-width: 425px) {
    font-size: 5vw;
  }
`;
export const HeaderText = styled.div`
  margin-left: 1.82vw;
  font-size: 0.78vw;
  line-height: 120%;
  letter-spacing: 0.05vw;

  @media (max-width: 1024px) {
    font-size: 1.2vw;
  }

  @media (max-width: 768px) {
    font-size: 2vw;
  }

  @media (max-width: 425px) {
    font-size: 2.3vw;
  }
`;
export const RightPart = styled.div`
  align-self: center;
`;
export const Navigation = styled.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`;
export const List = styled.ul`
  display: flex;
  column-gap: 3.02vw;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 9vw 2vw;
    flex-direction: column;
    align-items: flex-start;
    row-gap: 1vw;
  }

  @media (max-width: 768px) {
    padding: 11vw 2vw;
  }

  @media (max-width: 425px) {
    padding: 17vw 2vw;
  }
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

  @media (max-width: 1024px) {
    font-size: 1vw;
  }

  @media (max-width: 768px) {
    font-size: 2.5vw;
  }

  @media (max-width: 425px) {
    font-size: 5vw;
  }
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

  @media (max-width: 1024px) {
    width: 14vw;
  }

  @media (max-width: 768px) {
    font-size: 1.8vw;
    width: 25vw;
  }

  @media (max-width: 425px) {
    font-size: 4vw;
    width: 50vw;
    border-radius: 3vw;
    margin-top: 3vw;
  }
`;

export const BurgerButton = styled.div<{ isBurger: boolean }>`
  z-index: 11;
  display: none;
  position: relative;
  width: 0.63vw;
  height: 0.63vw;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 1vw;
    height: 1vw;
  }

  @media (max-width: 425px) {
    width: 2vw;
    height: 2vw;
  }

  &:before {
    content: "";
    width: ${({ isBurger }) => (isBurger ? "0.83vw" : "1.46vw")};
    height: 0.1vw;
    position: absolute;
    top: 0;
    right: 0;
    background-color: ${colors.lightBlack};
    transition: 0.2s;

    @media (max-width: 768px) {
      width: ${({ isBurger }) => (isBurger ? "1.3vw" : "2.5vw")};
      height: 0.3vw;
    }

    @media (max-width: 425px) {
      width: ${({ isBurger }) => (isBurger ? "2vw" : "4vw")};
      height: 0.5vw;
    }
  }

  &:after {
    content: "";
    width: ${({ isBurger }) => (isBurger ? "1.46vw" : "0.83vw")};
    height: 0.1vw;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: ${colors.lightBlack};
    transition: 0.2s;

    @media (max-width: 768px) {
      width: ${({ isBurger }) => (isBurger ? "2.5vw" : "1.3vw")};
      height: 0.3vw;
    }

    @media (max-width: 425px) {
      width: ${({ isBurger }) => (isBurger ? "4vw" : "2vw")};
      height: 0.5vw;
    }
  }

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const MenuBurger = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  background: ${colors.white};
  border-left: 0.05vw solid ${colors.grey};
  height: 100vh;
  width: 21vw;
  z-index: 10;
  display: none;

  @media (max-width: 1024px) {
    display: block;
  }

  @media (max-width: 768px) {
    width: 50vw;
  }

  @media (max-width: 425px) {
    width: 100vw;
  }
`;

export const BackgroundLine = styled.div`
  position: absolute;
  top: 3.2vw;
  right: -7%;
  width: 4.48vw;
  height: 0.05vw;
  background-color: ${colors.grey};

  @media (max-width: 1024px) {
    top: 4vw;
  }

  @media (max-width: 768px) {
    top: 8vw;
  }
`;

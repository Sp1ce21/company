import styled from "styled-components";
import { colors } from "../../constants/colors";

export const MainBlock = styled.main`
  display: flex;
  flex-direction: column;
`;
export const Top = styled.div`
  position: relative;
`;
export const Background = styled.img`
  object-fit: cover;
  width: 87.5vw;
  height: 31.25vw;
  position: absolute;
  top: 0;
  z-index: 1;

  @media (max-width: 1024px) {
    width: 90vw;
  }
`;
export const Title = styled.h1`
  z-index: 2;
  color: ${colors.white};
  position: absolute;
  font-weight: 700;
  font-size: 13.02vw;
  line-height: 74.5%;
  margin-top: 5.47vw;
  margin-left: -2%;
`;

export const Bottom = styled.div`
  margin-top: -1%;
  display: flex;
  justify-content: flex-end;
  padding-top: 29vw;
  margin-bottom: 3.96vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Left = styled.div`
  z-index: 3;
  padding: 3.8vw 4.17vw 3vw;
  background-color: ${colors.lightBlack};
  width: 31vw;
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  row-gap: 2.45vw;
  position: relative;

  @media (max-width: 768px) {
    width: 81.65vw;
  }

  @media (max-width: 425px) {
    row-gap: 4vw;
  }
`;
export const Text = styled.div`
  font-weight: 400;
  font-size: 1.25vw;
  max-width: 28vw;

  @media (max-width: 768px) {
    font-size: 1.7vw;
    max-width: 35vw;
  }

  @media (max-width: 425px) {
    font-size: 2.3vw;
    max-width: 60vw;
  }
`;
export const Button = styled.div`
  font-weight: 500;
  font-size: 0.89vw;
  background-color: ${colors.red};
  width: 14.06vw;
  height: 2.6vw;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.82vw;
  cursor: pointer;

  @media (max-width: 768px) {
    width: 20.06vw;
    height: 4.6vw;
    font-size: 1.89vw;
    border-radius: 3.82vw;
  }

  @media (max-width: 425px) {
    width: 40.06vw;
    height: 7vw;
    font-size: 3.5vw;
  }
`;

export const Right = styled.div``;

export const Rows = styled.div`
  width: 43.8vw;
  position: relative;
  height: 10.5vw;
  padding: 3.8vw 0 2.3vw;

  @media (max-width: 768px) {
    width: 90vw;
    height: 24vw;
    padding: 0vw 0 2.3vw;
  }

  @media (max-width: 426px) {
    padding: 0vw 0 6vw;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: nowrap;

  &:nth-child(1) {
    padding-top: 1.9%;
    border-bottom: 0.05vw ${colors.grey} solid;
    padding-bottom: 2.1vw;
    margin-bottom: 2.1vw;
  }

  &:last-child {
    padding-bottom: 2.1vw;
    position: relative;

    @media (max-width: 768px) {
      padding-bottom: 3.5vw;
    }

    @media (max-width: 425px) {
      padding-bottom: 5vw;
    }
  }

  &:last-child:after {
    content: "";
    position: absolute;
    border-bottom: 0.05vw ${colors.grey} solid;
    width: 28vw;
    left: 0;
    bottom: 0;

    @media (max-width: 768px) {
      width: 57vw;
    }
  }

  svg {
    max-height: 2.8vw;
    width: 9.9vw;

    @media (max-width: 768px) {
      max-height: 8vw;
      width: 15vw;
    }

    @media (max-width: 426px) {
      max-height: 10vw;
      width: 25vw;
    }
  }
`;

export const SquareImage = styled.img`
  position: absolute;
  top: 2.92vw;
  right: 3.39vw;
  width: 6.46vw;
  height: 6.51vw;

  @media (max-width: 768px) {
    width: 9.46vw;
    height: 9.51vw;
  }
`;

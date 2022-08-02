import React, { FC } from "react";
import {
  Background,
  Bottom,
  Button,
  Left,
  MainBlock,
  Right,
  Rows,
  Title,
  Top,
  Text,
  Row,
  SquareImage,
  Item,
} from "./styles";
import BackgroundImage from "../../assets/images/main-background.png";
import Square from "../../assets/images/svgs/square.svg";
import {
  FigmaIcon,
  HTMLIcon,
  SeoIcon,
  WebSpeedIcon,
  WooCommerseIcon,
  WordpressIcon,
} from "../../assets/images/svgs";

const Main: FC = () => {
  return (
    <MainBlock>
      <Top>
        <Title>web &nbsp;development</Title>
        <Background src={BackgroundImage} alt="background image" />
      </Top>
      <Bottom>
        <Left>
          <SquareImage src={Square} alt="square" />
          <Text>
            Wordpress / Woocommerce project of any scale. HTML Layout of any
            complexity. Technical SEO optimization. PageSpeed / Core Vitals.
          </Text>
          <Button href="#">Get a quote</Button>
        </Left>
        <Right>
          <Rows>
            <Row>
              <Item>
                <WordpressIcon />
              </Item>
              <Item>
                <WooCommerseIcon />
              </Item>
              <Item>
                <HTMLIcon />
              </Item>
            </Row>
            <Row>
              <Item>
                <SeoIcon />
              </Item>
              <Item>
                <WebSpeedIcon />
              </Item>
              <Item>
                <FigmaIcon />
              </Item>
            </Row>
          </Rows>
        </Right>
      </Bottom>
    </MainBlock>
  );
};

export default Main;

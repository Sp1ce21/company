import React, { FC } from 'react'
import { HeaderBlock, HeaderLink, HeaderText, LeftPart, LinkButton, List, Logo, Navigation, Point, RightPart } from './styles'

const Header: FC = () => {
  return (
    <HeaderBlock>
        <LeftPart>
            <Logo>company</Logo>
            <HeaderText>Your technology partner in the web development</HeaderText>
        </LeftPart>
        <RightPart>
            <Navigation>
                <List>
                    <Point>
                        <HeaderLink>services</HeaderLink>
                    </Point>
                    <Point>
                        <HeaderLink>engagement models</HeaderLink>
                    </Point>
                    <Point>
                        <HeaderLink>case studies</HeaderLink>
                    </Point>
                    <Point>
                        <LinkButton>Contact us</LinkButton>
                    </Point>
                </List>
            </Navigation>
        </RightPart>
        {/* <MenuBurger></MenuBurger> */}
    </HeaderBlock>
  )
}

export default Header
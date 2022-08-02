import React, { FC, useRef, useState } from "react";
import { navigation } from "../../constants/navigation";
import { useClickOutside } from "../../utils/use-click-outside";
import HeaderList from "./HeaderList";
import {
  BackgroundLine,
  BurgerButton,
  HeaderBlock,
  HeaderText,
  LeftPart,
  LinkButton,
  Logo,
  MenuBurger,
  Navigation,
  RightPart,
} from "./styles";

const Header: FC = () => {
  const [isBurger, setIsBurger] = useState(false);
  const currentRef = useRef<HTMLDivElement>(null);
  useClickOutside(currentRef, () => {
    setIsBurger(false);
  });
  return (
    <>
      <div className="container">
        <HeaderBlock>
          <LeftPart>
            <Logo>company</Logo>
            <HeaderText>
              Your technology partner in the web development
            </HeaderText>
          </LeftPart>
          <RightPart>
            <Navigation>
              <HeaderList list={navigation} />
            </Navigation>
            <LinkButton href="#" isHeader={true}>
              Contact us
            </LinkButton>
            <BurgerButton
              onClick={(e) => {
                setIsBurger(!isBurger);
                e.stopPropagation();
              }}
              isBurger={isBurger}
            />
          </RightPart>
          <BackgroundLine />
        </HeaderBlock>
        {isBurger && (
          <MenuBurger ref={currentRef}>
            <HeaderList list={navigation} />
            <LinkButton href="#">Contact us</LinkButton>
          </MenuBurger>
        )}
      </div>
    </>
  );
};

export default Header;

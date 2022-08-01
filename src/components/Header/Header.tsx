import React, { FC, useState } from "react";
import { navigation } from "../../constants/navigation";
import HeaderList from "./HeaderList";
import {
    BackgroundLine,
  BurgerButton,
  HeaderBlock,
  HeaderText,
  LeftPart,
  Logo,
  MenuBurger,
  Navigation,
  RightPart,
} from "./styles";

const Header: FC = () => {
  const [isBurger, setIsBurger] = useState(false);
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
            <BurgerButton
              onClick={() => setIsBurger(!isBurger)}
              isBurger={isBurger}
            />
          </RightPart>
          <BackgroundLine/>
        </HeaderBlock>
        {isBurger && (
          <MenuBurger>
            <HeaderList list={navigation} />
          </MenuBurger>
        )}
      </div>
    </>
  );
};

export default Header;

import React, { FC } from "react";
import { HeaderLink, LinkButton, List, Point } from "./styles";

const HeaderList: FC<{ list: string[] }> = ({ list }) => {
  return (
    <List>
      {list.length !== 0 &&
        list.map((link) => (
          <Point>
            <HeaderLink>{link}</HeaderLink>
          </Point>
        ))}
      <Point>
        <LinkButton>Contact us</LinkButton>
      </Point>
    </List>
  );
};

export default HeaderList;

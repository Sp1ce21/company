import React, { FC } from "react";
import { HeaderLink, List, Point } from "./styles";

const HeaderList: FC<{ list: { label: string }[] }> = ({ list }) => {
  return (
    <List>
      {list.length !== 0 &&
        list.map(({ label }) => (
          <Point key={label}>
            <HeaderLink href="#">{label}</HeaderLink>
          </Point>
        ))}
    </List>
  );
};

export default HeaderList;

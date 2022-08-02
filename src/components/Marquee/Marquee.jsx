import React from "react";
import Marquee from "react-fast-marquee";
import {
  SiemensIcon,
  MuteDesignIcon,
  SocialHealthIcon,
  EmploymentIcon,
  DXIcon,
  PetricoreIcon,
} from "../../assets/images/svgs";
import { Line, MarqueeContainer, MarqueeItem } from "./styles";

const icons = [
  { Icon: SiemensIcon, id: 0 },
  { Icon: MuteDesignIcon, id: 1 },
  { Icon: SocialHealthIcon, id: 2 },
  { Icon: EmploymentIcon, id: 3 },
  { Icon: DXIcon, id: 4 },
  { Icon: PetricoreIcon, id: 5 },
];

const MarqueeBlock = () => {
  return (
    <MarqueeContainer>
      <div className="container">
        <Line />
      </div>
      <Marquee direction="right" speed={100} className="marquee">
        {icons.map(({ Icon, id }) => (
          <MarqueeItem key={id}>
            <Icon />
          </MarqueeItem>
        ))}
      </Marquee>
    </MarqueeContainer>
  );
};

export default MarqueeBlock;

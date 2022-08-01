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
  SiemensIcon,
  MuteDesignIcon,
  SocialHealthIcon,
  EmploymentIcon,
  DXIcon,
  PetricoreIcon,
];

const MarqueeBlock = () => {
  return (
    <MarqueeContainer>
      <div className="container">
        <Line />
      </div>
      <Marquee direction="right" speed={100} className="marquee">
        {icons.map((Icon) => (
          <MarqueeItem>
            <Icon />
          </MarqueeItem>
        ))}
      </Marquee>
    </MarqueeContainer>
  );
};

export default MarqueeBlock;

import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const HomeIcon = (props: SvgProps) => (
  <Svg width={25} height={24} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M2.9 13.713c0-5.631.614-5.238 3.919-8.303C8.265 4.246 10.515 2 12.458 2c1.942 0 4.237 2.235 5.696 3.41 3.305 3.065 3.918 2.672 3.918 8.303C22.072 22 20.113 22 12.486 22 4.859 22 2.9 22 2.9 13.713Z"
      clipRule="evenodd"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M9.58 16.135h5.815"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21.825}
        x2={2.191}
        y1={16.423}
        y2={16.169}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default HomeIcon;

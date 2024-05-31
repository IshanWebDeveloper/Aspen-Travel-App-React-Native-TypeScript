import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Circle,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const LocationIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M8 14c2.945-1.333 5.333-3.721 5.333-6.667a5.333 5.333 0 1 0-10.666 0C2.667 10.28 5.054 12.667 8 14Zm0-4.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      clipRule="evenodd"
      opacity={0.15}
    />
    <Path
      fill="url(#b)"
      d="M13.333 7.333c0 2.946-2.388 5.334-5.333 6.667-2.946-1.333-5.333-3.721-5.333-6.667a5.333 5.333 0 1 1 10.666 0Z"
    />
    <Path fill="url(#c)" d="M10 7.333a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
    <Circle cx={8} cy={8} r={2} fill="#fff" />
    <Defs>
      <LinearGradient
        id="a"
        x1={13.196}
        x2={2.272}
        y1={10.654}
        y2={10.523}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={13.196}
        x2={2.272}
        y1={10.654}
        y2={10.523}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={13.196}
        x2={2.272}
        y1={10.654}
        y2={10.523}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#176FF2" />
        <Stop offset={1} stopColor="#196EEE" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default LocationIcon;

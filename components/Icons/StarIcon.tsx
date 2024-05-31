import * as React from "react";
import Svg, {
  SvgProps,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg";
const StarIcon = (props: SvgProps) => (
  <Svg width={16} height={16} fill="none" {...props}>
    <Path
      fill="#D8D138"
      d="m8.003 11.333-4 2 1-4-3-3.333 4.334-.334L8.003 2 9.67 5.666 14.004 6l-3 3.333 1 4-4-2Z"
    />
    <Path
      fill="url(#a)"
      d="m8.003 11.333-4 2 1-4-3-3.333 4.334-.334L8.003 2 9.67 5.666 14.004 6l-3 3.333 1 4-4-2Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={13.736}
        x2={2.466}
        y1={9.856}
        y2={9.617}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#DF9652" />
        <Stop offset={1} stopColor="#B47820" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default StarIcon;

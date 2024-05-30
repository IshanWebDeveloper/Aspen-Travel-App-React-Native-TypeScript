import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const TrendingUp = (props: SvgProps) => (
  <Svg width={12} height={12} fill="none" {...props}>
    <Path
      stroke="#84ABE4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m10.5 3.5-4 4-2-2-3 3m9-5v3m0-3h-3"
    />
  </Svg>
);
export default TrendingUp;

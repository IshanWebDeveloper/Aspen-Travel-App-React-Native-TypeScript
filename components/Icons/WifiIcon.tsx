import * as React from "react";
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg";
const WifiIcon = (props: SvgProps) => (
  <Svg width={33} height={32} fill="none" {...props}>
    <G clipPath="url(#a)">
      <Path
        fill="#B8B8B8"
        d="M16.5 20.333a3.667 3.667 0 1 1 0 7.334 3.667 3.667 0 0 1 0-7.334Zm0 2a1.667 1.667 0 1 0 0 3.334 1.667 1.667 0 0 0 0-3.334Zm0-7.333a9 9 0 0 1 8.043 4.957L23.03 21.47a7.002 7.002 0 0 0-13.058 0l-1.514-1.514A9 9 0 0 1 16.5 15Zm0-5.333c4.98 0 9.368 2.54 11.937 6.396L26.99 17.51a12.325 12.325 0 0 0-10.49-5.843c-4.43 0-8.315 2.336-10.49 5.843l-1.446-1.448C7.132 12.207 11.52 9.668 16.5 9.668Zm0-5.334c6.451 0 12.177 3.106 15.763 7.904l-1.43 1.431C27.622 9.225 22.4 6.333 16.5 6.333S5.377 9.225 2.168 13.667l-1.43-1.43C4.324 7.438 10.049 4.332 16.5 4.332Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5 0h32v32H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WifiIcon;

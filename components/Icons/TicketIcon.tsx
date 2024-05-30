import * as React from "react";
import Svg, { SvgProps, G, Path } from "react-native-svg";
const TicketIcon = (props: SvgProps) => (
  <Svg width={21} height={20} fill="none" {...props}>
    <G
      stroke="#B8B8B8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.35}
    >
      <Path d="M11.887 4.189v1.814M11.887 14.319v1.517M11.887 11.741V8.126" />
      <Path
        d="M15.527 15.999c1.367 0 2.473-1.093 2.473-2.443v-1.943c-.904 0-1.632-.72-1.632-1.612A1.62 1.62 0 0 1 18 8.388V6.443c0-1.349-1.108-2.442-2.473-2.442H5.476c-1.366 0-2.473 1.093-2.473 2.442v2.008c.903 0 1.631.657 1.631 1.55 0 .892-.728 1.612-1.632 1.612v1.943C3.003 14.906 4.11 16 5.476 16h10.051Z"
        clipRule="evenodd"
      />
    </G>
  </Svg>
);
export default TicketIcon;

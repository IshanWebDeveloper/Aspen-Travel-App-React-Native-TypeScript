import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BathTubIcon = (props: SvgProps) => (
  <Svg width={32} height={32} fill="none" {...props}>
    <Path
      fill="#B8B8B8"
      d="M24.5 2a4.5 4.5 0 0 0-4.473 4H18v2h6V6h-1.95a2.5 2.5 0 0 1 4.945.336L27 6.5V16H1v2h2v5a5 5 0 0 0 3 4.584V30h2v-2h16v2h2v-2.416a5.001 5.001 0 0 0 2.995-4.349L29 23v-5h2v-2h-2V6.5A4.5 4.5 0 0 0 24.5 2ZM5.001 18h22L27 23a3 3 0 0 1-2.65 2.98l-.174.015L24 26H8a3 3 0 0 1-2.995-2.824L5 23l.001-5Z"
    />
  </Svg>
);
export default BathTubIcon;

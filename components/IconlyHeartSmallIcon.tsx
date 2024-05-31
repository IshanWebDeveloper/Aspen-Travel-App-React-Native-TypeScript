import * as React from "react";
import Svg, { SvgProps, Rect, Path } from "react-native-svg";
const IconlyHeartSmallIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Rect width={24} height={24} fill="#F3F8FE" rx={12} />
    <Path
      fill="#EC5655"
      d="M15.36 7.014a3.163 3.163 0 0 0-1.007-.157 3.39 3.39 0 0 0-2.084.703c-.049-.037-.108-.07-.162-.102-.055-.033-.152-.114-.233-.157l-.206-.092a1.908 1.908 0 0 0-.341-.141.19.19 0 0 0-.049-.032h-.032a3.377 3.377 0 0 0-.99-.179h-.06c-.152 0-.303.01-.455.033h-.065a2.447 2.447 0 0 0-.481.113c-2.02.66-2.74 2.853-2.128 4.77.346.979.904 1.867 1.63 2.598a20.621 20.621 0 0 0 3.448 2.685l.14.087.136-.082a20.812 20.812 0 0 0 3.427-2.685 6.89 6.89 0 0 0 1.629-2.603c.601-1.917-.119-4.11-2.117-4.759Z"
    />
  </Svg>
);
export default IconlyHeartSmallIcon;

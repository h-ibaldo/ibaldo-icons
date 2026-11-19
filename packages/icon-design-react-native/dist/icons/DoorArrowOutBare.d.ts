import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorArrowOutBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorArrowOutBare: ForwardRefExoticComponent<DoorArrowOutBareProps & RefAttributes<Svg>>;

export default DoorArrowOutBare;
export { DoorArrowOutBare };

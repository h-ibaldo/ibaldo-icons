import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorArrowInBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorArrowInBare: ForwardRefExoticComponent<DoorArrowInBareProps & RefAttributes<Svg>>;

export default DoorArrowInBare;
export { DoorArrowInBare };

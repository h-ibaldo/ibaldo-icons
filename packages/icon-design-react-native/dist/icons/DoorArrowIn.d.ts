import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorArrowInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorArrowIn: ForwardRefExoticComponent<DoorArrowInProps & RefAttributes<Svg>>;

export default DoorArrowIn;
export { DoorArrowIn };

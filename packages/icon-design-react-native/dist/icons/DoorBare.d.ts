import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorBare: ForwardRefExoticComponent<DoorBareProps & RefAttributes<Svg>>;

export default DoorBare;
export { DoorBare };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorXBareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorXBare: ForwardRefExoticComponent<DoorXBareProps & RefAttributes<Svg>>;

export default DoorXBare;
export { DoorXBare };

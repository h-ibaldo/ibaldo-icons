import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorOpenXProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorOpenX: ForwardRefExoticComponent<DoorOpenXProps & RefAttributes<Svg>>;

export default DoorOpenX;
export { DoorOpenX };

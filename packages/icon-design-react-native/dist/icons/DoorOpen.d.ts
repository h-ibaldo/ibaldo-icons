import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface DoorOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const DoorOpen: ForwardRefExoticComponent<DoorOpenProps & RefAttributes<Svg>>;

export default DoorOpen;
export { DoorOpen };

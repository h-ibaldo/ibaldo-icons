import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoor: ForwardRefExoticComponent<HouseDoorProps & RefAttributes<Svg>>;

export default HouseDoor;
export { HouseDoor };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorArchPentagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorArchPentagon: ForwardRefExoticComponent<HouseDoorArchPentagonProps & RefAttributes<Svg>>;

export default HouseDoorArchPentagon;
export { HouseDoorArchPentagon };

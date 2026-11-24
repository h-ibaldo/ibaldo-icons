import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorPentagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorPentagon: ForwardRefExoticComponent<HouseDoorPentagonProps & RefAttributes<Svg>>;

export default HouseDoorPentagon;
export { HouseDoorPentagon };

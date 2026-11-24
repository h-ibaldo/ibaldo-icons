import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorArchProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorArch: ForwardRefExoticComponent<HouseDoorArchProps & RefAttributes<Svg>>;

export default HouseDoorArch;
export { HouseDoorArch };

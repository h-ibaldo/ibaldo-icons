import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorEavesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorEaves: ForwardRefExoticComponent<HouseDoorEavesProps & RefAttributes<Svg>>;

export default HouseDoorEaves;
export { HouseDoorEaves };

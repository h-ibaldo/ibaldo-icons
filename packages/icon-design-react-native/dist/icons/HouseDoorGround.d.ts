import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseDoorGroundProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseDoorGround: ForwardRefExoticComponent<HouseDoorGroundProps & RefAttributes<Svg>>;

export default HouseDoorGround;
export { HouseDoorGround };

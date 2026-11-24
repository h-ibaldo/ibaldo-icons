import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HouseEavesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HouseEaves: ForwardRefExoticComponent<HouseEavesProps & RefAttributes<Svg>>;

export default HouseEaves;
export { HouseEaves };

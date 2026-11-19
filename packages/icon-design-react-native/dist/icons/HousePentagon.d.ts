import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HousePentagonProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HousePentagon: ForwardRefExoticComponent<HousePentagonProps & RefAttributes<Svg>>;

export default HousePentagon;
export { HousePentagon };

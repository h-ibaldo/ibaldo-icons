import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartPlusAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartPlusAngular: ForwardRefExoticComponent<HeartPlusAngularProps & RefAttributes<Svg>>;

export default HeartPlusAngular;
export { HeartPlusAngular };

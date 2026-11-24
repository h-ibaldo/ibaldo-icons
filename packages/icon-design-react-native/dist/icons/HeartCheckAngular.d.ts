import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartCheckAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartCheckAngular: ForwardRefExoticComponent<HeartCheckAngularProps & RefAttributes<Svg>>;

export default HeartCheckAngular;
export { HeartCheckAngular };

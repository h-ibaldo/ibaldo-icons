import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartXAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartXAngular: ForwardRefExoticComponent<HeartXAngularProps & RefAttributes<Svg>>;

export default HeartXAngular;
export { HeartXAngular };

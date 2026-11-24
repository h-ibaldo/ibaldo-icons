import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartBrokenAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartBrokenAngular: ForwardRefExoticComponent<HeartBrokenAngularProps & RefAttributes<Svg>>;

export default HeartBrokenAngular;
export { HeartBrokenAngular };

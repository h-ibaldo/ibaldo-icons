import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartAngular: ForwardRefExoticComponent<HeartAngularProps & RefAttributes<Svg>>;

export default HeartAngular;
export { HeartAngular };

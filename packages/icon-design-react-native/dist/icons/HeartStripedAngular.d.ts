import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HeartStripedAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HeartStripedAngular: ForwardRefExoticComponent<HeartStripedAngularProps & RefAttributes<Svg>>;

export default HeartStripedAngular;
export { HeartStripedAngular };

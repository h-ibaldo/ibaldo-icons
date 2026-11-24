import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationLeftCircle: ForwardRefExoticComponent<NavigationLeftCircleProps & RefAttributes<Svg>>;

export default NavigationLeftCircle;
export { NavigationLeftCircle };

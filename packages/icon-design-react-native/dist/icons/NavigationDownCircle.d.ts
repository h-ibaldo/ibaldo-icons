import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationDownCircle: ForwardRefExoticComponent<NavigationDownCircleProps & RefAttributes<Svg>>;

export default NavigationDownCircle;
export { NavigationDownCircle };

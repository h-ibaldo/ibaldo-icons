import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpCircleCheckProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpCircleCheck: ForwardRefExoticComponent<NavigationUpCircleCheckProps & RefAttributes<Svg>>;

export default NavigationUpCircleCheck;
export { NavigationUpCircleCheck };

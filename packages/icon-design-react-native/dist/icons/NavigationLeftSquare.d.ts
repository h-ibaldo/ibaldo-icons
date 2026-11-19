import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationLeftSquare: ForwardRefExoticComponent<NavigationLeftSquareProps & RefAttributes<Svg>>;

export default NavigationLeftSquare;
export { NavigationLeftSquare };

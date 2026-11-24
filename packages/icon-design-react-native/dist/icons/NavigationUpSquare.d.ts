import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpSquare: ForwardRefExoticComponent<NavigationUpSquareProps & RefAttributes<Svg>>;

export default NavigationUpSquare;
export { NavigationUpSquare };

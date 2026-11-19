import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationDownSquare: ForwardRefExoticComponent<NavigationDownSquareProps & RefAttributes<Svg>>;

export default NavigationDownSquare;
export { NavigationDownSquare };

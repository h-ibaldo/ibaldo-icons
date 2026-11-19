import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationDownLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationDownLeftSquare: ForwardRefExoticComponent<NavigationDownLeftSquareProps & RefAttributes<Svg>>;

export default NavigationDownLeftSquare;
export { NavigationDownLeftSquare };

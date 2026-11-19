import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationRightSquare: ForwardRefExoticComponent<NavigationRightSquareProps & RefAttributes<Svg>>;

export default NavigationRightSquare;
export { NavigationRightSquare };

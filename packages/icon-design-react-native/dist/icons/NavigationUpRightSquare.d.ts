import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightSquare: ForwardRefExoticComponent<NavigationUpRightSquareProps & RefAttributes<Svg>>;

export default NavigationUpRightSquare;
export { NavigationUpRightSquare };

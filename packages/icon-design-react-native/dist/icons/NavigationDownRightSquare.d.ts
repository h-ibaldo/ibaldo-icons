import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationDownRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationDownRightSquare: ForwardRefExoticComponent<NavigationDownRightSquareProps & RefAttributes<Svg>>;

export default NavigationDownRightSquare;
export { NavigationDownRightSquare };

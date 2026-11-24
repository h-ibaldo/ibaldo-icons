import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpLeftSquare: ForwardRefExoticComponent<NavigationUpLeftSquareProps & RefAttributes<Svg>>;

export default NavigationUpLeftSquare;
export { NavigationUpLeftSquare };

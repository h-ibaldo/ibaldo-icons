import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRight: ForwardRefExoticComponent<NavigationUpRightProps & RefAttributes<Svg>>;

export default NavigationUpRight;
export { NavigationUpRight };

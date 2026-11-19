import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUp: ForwardRefExoticComponent<NavigationUpProps & RefAttributes<Svg>>;

export default NavigationUp;
export { NavigationUp };

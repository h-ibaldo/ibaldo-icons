import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpLeftCircle: ForwardRefExoticComponent<NavigationUpLeftCircleProps & RefAttributes<Svg>>;

export default NavigationUpLeftCircle;
export { NavigationUpLeftCircle };

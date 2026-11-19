import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightCircle: ForwardRefExoticComponent<NavigationUpRightCircleProps & RefAttributes<Svg>>;

export default NavigationUpRightCircle;
export { NavigationUpRightCircle };

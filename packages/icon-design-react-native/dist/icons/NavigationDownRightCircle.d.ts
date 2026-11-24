import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationDownRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationDownRightCircle: ForwardRefExoticComponent<NavigationDownRightCircleProps & RefAttributes<Svg>>;

export default NavigationDownRightCircle;
export { NavigationDownRightCircle };

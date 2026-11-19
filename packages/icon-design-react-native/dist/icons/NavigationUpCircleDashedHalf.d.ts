import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpCircleDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpCircleDashedHalf: ForwardRefExoticComponent<NavigationUpCircleDashedHalfProps & RefAttributes<Svg>>;

export default NavigationUpCircleDashedHalf;
export { NavigationUpCircleDashedHalf };

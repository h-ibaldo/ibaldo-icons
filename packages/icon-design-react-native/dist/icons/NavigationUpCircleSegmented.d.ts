import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpCircleSegmented: ForwardRefExoticComponent<NavigationUpCircleSegmentedProps & RefAttributes<Svg>>;

export default NavigationUpCircleSegmented;
export { NavigationUpCircleSegmented };

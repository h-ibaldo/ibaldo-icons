import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightCornersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightCorners: ForwardRefExoticComponent<NavigationUpRightCornersProps & RefAttributes<Svg>>;

export default NavigationUpRightCorners;
export { NavigationUpRightCorners };

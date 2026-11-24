import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpCircleDashed: ForwardRefExoticComponent<NavigationUpCircleDashedProps & RefAttributes<Svg>>;

export default NavigationUpCircleDashed;
export { NavigationUpCircleDashed };

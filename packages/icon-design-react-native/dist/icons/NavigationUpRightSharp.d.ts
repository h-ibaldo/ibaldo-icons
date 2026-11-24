import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpRightSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpRightSharp: ForwardRefExoticComponent<NavigationUpRightSharpProps & RefAttributes<Svg>>;

export default NavigationUpRightSharp;
export { NavigationUpRightSharp };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NavigationUpLeftSharpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NavigationUpLeftSharp: ForwardRefExoticComponent<NavigationUpLeftSharpProps & RefAttributes<Svg>>;

export default NavigationUpLeftSharp;
export { NavigationUpLeftSharp };

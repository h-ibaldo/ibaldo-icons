import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface SunSpokeLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const SunSpokeLarge: ForwardRefExoticComponent<SunSpokeLargeProps & RefAttributes<Svg>>;

export default SunSpokeLarge;
export { SunSpokeLarge };

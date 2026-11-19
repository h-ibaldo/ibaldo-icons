import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeFlatCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeFlatCircleLarge: ForwardRefExoticComponent<GaugeFlatCircleLargeProps & RefAttributes<Svg>>;

export default GaugeFlatCircleLarge;
export { GaugeFlatCircleLarge };

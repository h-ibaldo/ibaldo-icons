import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface GaugeFlatCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const GaugeFlatCircle: ForwardRefExoticComponent<GaugeFlatCircleProps & RefAttributes<Svg>>;

export default GaugeFlatCircle;
export { GaugeFlatCircle };

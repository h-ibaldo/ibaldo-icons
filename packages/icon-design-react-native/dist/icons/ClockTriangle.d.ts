import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ClockTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ClockTriangle: ForwardRefExoticComponent<ClockTriangleProps & RefAttributes<Svg>>;

export default ClockTriangle;
export { ClockTriangle };

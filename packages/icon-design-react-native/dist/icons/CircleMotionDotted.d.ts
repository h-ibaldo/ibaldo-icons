import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleMotionDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleMotionDotted: ForwardRefExoticComponent<CircleMotionDottedProps & RefAttributes<Svg>>;

export default CircleMotionDotted;
export { CircleMotionDotted };

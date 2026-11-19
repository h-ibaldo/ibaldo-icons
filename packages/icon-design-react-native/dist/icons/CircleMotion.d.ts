import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleMotionProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleMotion: ForwardRefExoticComponent<CircleMotionProps & RefAttributes<Svg>>;

export default CircleMotion;
export { CircleMotion };

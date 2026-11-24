import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleOverlapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleOverlap: ForwardRefExoticComponent<CircleOverlapProps & RefAttributes<Svg>>;

export default CircleOverlap;
export { CircleOverlap };

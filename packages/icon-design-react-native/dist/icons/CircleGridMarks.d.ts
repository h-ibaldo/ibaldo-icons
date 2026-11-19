import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CircleGridMarksProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CircleGridMarks: ForwardRefExoticComponent<CircleGridMarksProps & RefAttributes<Svg>>;

export default CircleGridMarks;
export { CircleGridMarks };

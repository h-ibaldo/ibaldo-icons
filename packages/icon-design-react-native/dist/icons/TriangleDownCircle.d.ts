import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleDownCircle: ForwardRefExoticComponent<TriangleDownCircleProps & RefAttributes<Svg>>;

export default TriangleDownCircle;
export { TriangleDownCircle };

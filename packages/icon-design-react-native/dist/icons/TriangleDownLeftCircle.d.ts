import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleDownLeftCircle: ForwardRefExoticComponent<TriangleDownLeftCircleProps & RefAttributes<Svg>>;

export default TriangleDownLeftCircle;
export { TriangleDownLeftCircle };

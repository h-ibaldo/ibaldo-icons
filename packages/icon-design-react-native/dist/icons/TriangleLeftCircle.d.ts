import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleLeftCircle: ForwardRefExoticComponent<TriangleLeftCircleProps & RefAttributes<Svg>>;

export default TriangleLeftCircle;
export { TriangleLeftCircle };

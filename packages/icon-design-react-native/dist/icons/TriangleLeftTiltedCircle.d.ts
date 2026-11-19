import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleLeftTiltedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleLeftTiltedCircle: ForwardRefExoticComponent<TriangleLeftTiltedCircleProps & RefAttributes<Svg>>;

export default TriangleLeftTiltedCircle;
export { TriangleLeftTiltedCircle };

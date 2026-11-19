import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleRightTiltedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleRightTiltedCircle: ForwardRefExoticComponent<TriangleRightTiltedCircleProps & RefAttributes<Svg>>;

export default TriangleRightTiltedCircle;
export { TriangleRightTiltedCircle };

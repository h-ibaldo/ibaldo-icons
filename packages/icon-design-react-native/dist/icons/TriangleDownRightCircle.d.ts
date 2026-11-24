import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleDownRightCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleDownRightCircle: ForwardRefExoticComponent<TriangleDownRightCircleProps & RefAttributes<Svg>>;

export default TriangleDownRightCircle;
export { TriangleDownRightCircle };

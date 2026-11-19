import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TriangleUpCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TriangleUpCircle: ForwardRefExoticComponent<TriangleUpCircleProps & RefAttributes<Svg>>;

export default TriangleUpCircle;
export { TriangleUpCircle };

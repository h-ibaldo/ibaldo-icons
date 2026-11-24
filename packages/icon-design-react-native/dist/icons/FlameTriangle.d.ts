import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlameTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlameTriangle: ForwardRefExoticComponent<FlameTriangleProps & RefAttributes<Svg>>;

export default FlameTriangle;
export { FlameTriangle };

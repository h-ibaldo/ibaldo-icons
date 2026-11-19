import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface FlameTriangleDropProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const FlameTriangleDrop: ForwardRefExoticComponent<FlameTriangleDropProps & RefAttributes<Svg>>;

export default FlameTriangleDrop;
export { FlameTriangleDrop };

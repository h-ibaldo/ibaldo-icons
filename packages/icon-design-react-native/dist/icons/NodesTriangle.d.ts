import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesTriangleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesTriangle: ForwardRefExoticComponent<NodesTriangleProps & RefAttributes<Svg>>;

export default NodesTriangle;
export { NodesTriangle };

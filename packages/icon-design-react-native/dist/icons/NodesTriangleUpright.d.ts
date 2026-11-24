import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesTriangleUprightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesTriangleUpright: ForwardRefExoticComponent<NodesTriangleUprightProps & RefAttributes<Svg>>;

export default NodesTriangleUpright;
export { NodesTriangleUpright };

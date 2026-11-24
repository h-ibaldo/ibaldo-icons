import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesTriangleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesTriangleLarge: ForwardRefExoticComponent<NodesTriangleLargeProps & RefAttributes<Svg>>;

export default NodesTriangleLarge;
export { NodesTriangleLarge };

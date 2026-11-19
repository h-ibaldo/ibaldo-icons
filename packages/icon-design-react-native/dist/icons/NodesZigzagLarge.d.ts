import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesZigzagLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesZigzagLarge: ForwardRefExoticComponent<NodesZigzagLargeProps & RefAttributes<Svg>>;

export default NodesZigzagLarge;
export { NodesZigzagLarge };

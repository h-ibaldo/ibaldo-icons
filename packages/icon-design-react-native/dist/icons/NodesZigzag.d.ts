import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesZigzagProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesZigzag: ForwardRefExoticComponent<NodesZigzagProps & RefAttributes<Svg>>;

export default NodesZigzag;
export { NodesZigzag };

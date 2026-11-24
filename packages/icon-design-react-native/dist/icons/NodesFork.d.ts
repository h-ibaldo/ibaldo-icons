import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesForkProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesFork: ForwardRefExoticComponent<NodesForkProps & RefAttributes<Svg>>;

export default NodesFork;
export { NodesFork };

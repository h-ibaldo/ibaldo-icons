import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesForkLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesForkLarge: ForwardRefExoticComponent<NodesForkLargeProps & RefAttributes<Svg>>;

export default NodesForkLarge;
export { NodesForkLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface NodesRingProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const NodesRing: ForwardRefExoticComponent<NodesRingProps & RefAttributes<Svg>>;

export default NodesRing;
export { NodesRing };

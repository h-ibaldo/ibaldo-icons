import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncNodesProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncNodes: ForwardRefExoticComponent<ArrowSyncNodesProps & RefAttributes<Svg>>;

export default ArrowSyncNodes;
export { ArrowSyncNodes };

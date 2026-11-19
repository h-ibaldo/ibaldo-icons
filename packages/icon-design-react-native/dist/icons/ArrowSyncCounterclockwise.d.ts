import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncCounterclockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCounterclockwise: ForwardRefExoticComponent<ArrowSyncCounterclockwiseProps & RefAttributes<Svg>>;

export default ArrowSyncCounterclockwise;
export { ArrowSyncCounterclockwise };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncCounterclockwiseRotatedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCounterclockwiseRotated: ForwardRefExoticComponent<ArrowSyncCounterclockwiseRotatedProps & RefAttributes<Svg>>;

export default ArrowSyncCounterclockwiseRotated;
export { ArrowSyncCounterclockwiseRotated };

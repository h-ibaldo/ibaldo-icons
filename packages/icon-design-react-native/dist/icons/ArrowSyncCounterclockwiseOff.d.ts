import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncCounterclockwiseOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCounterclockwiseOff: ForwardRefExoticComponent<ArrowSyncCounterclockwiseOffProps & RefAttributes<Svg>>;

export default ArrowSyncCounterclockwiseOff;
export { ArrowSyncCounterclockwiseOff };

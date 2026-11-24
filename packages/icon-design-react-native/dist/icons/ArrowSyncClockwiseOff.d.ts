import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseOffProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseOff: ForwardRefExoticComponent<ArrowSyncClockwiseOffProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseOff;
export { ArrowSyncClockwiseOff };

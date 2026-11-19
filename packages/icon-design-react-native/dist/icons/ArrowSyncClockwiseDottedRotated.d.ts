import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseDottedRotatedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseDottedRotated: ForwardRefExoticComponent<ArrowSyncClockwiseDottedRotatedProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseDottedRotated;
export { ArrowSyncClockwiseDottedRotated };

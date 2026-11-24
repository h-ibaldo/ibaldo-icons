import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseDottedDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseDottedDiagonal: ForwardRefExoticComponent<ArrowSyncClockwiseDottedDiagonalProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseDottedDiagonal;
export { ArrowSyncClockwiseDottedDiagonal };

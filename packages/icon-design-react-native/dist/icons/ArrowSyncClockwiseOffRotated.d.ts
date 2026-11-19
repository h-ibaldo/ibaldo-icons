import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseOffRotatedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseOffRotated: ForwardRefExoticComponent<ArrowSyncClockwiseOffRotatedProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseOffRotated;
export { ArrowSyncClockwiseOffRotated };

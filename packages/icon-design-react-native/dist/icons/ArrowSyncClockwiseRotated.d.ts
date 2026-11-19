import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseRotatedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseRotated: ForwardRefExoticComponent<ArrowSyncClockwiseRotatedProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseRotated;
export { ArrowSyncClockwiseRotated };

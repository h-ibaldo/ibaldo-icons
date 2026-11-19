import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwise: ForwardRefExoticComponent<ArrowSyncClockwiseProps & RefAttributes<Svg>>;

export default ArrowSyncClockwise;
export { ArrowSyncClockwise };

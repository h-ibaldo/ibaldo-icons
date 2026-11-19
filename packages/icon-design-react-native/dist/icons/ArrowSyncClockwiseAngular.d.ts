import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseAngular: ForwardRefExoticComponent<ArrowSyncClockwiseAngularProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseAngular;
export { ArrowSyncClockwiseAngular };

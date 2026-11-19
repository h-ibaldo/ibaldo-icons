import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseOffAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseOffAngular: ForwardRefExoticComponent<ArrowSyncClockwiseOffAngularProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseOffAngular;
export { ArrowSyncClockwiseOffAngular };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncCounterclockwiseAngularProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncCounterclockwiseAngular: ForwardRefExoticComponent<ArrowSyncCounterclockwiseAngularProps & RefAttributes<Svg>>;

export default ArrowSyncCounterclockwiseAngular;
export { ArrowSyncCounterclockwiseAngular };

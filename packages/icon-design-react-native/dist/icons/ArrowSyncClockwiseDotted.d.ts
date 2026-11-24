import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwiseDottedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwiseDotted: ForwardRefExoticComponent<ArrowSyncClockwiseDottedProps & RefAttributes<Svg>>;

export default ArrowSyncClockwiseDotted;
export { ArrowSyncClockwiseDotted };

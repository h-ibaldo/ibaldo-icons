import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncClockwise2Props extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncClockwise2: ForwardRefExoticComponent<ArrowSyncClockwise2Props & RefAttributes<Svg>>;

export default ArrowSyncClockwise2;
export { ArrowSyncClockwise2 };

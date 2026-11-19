import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncNodesDiagonalProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncNodesDiagonal: ForwardRefExoticComponent<ArrowSyncNodesDiagonalProps & RefAttributes<Svg>>;

export default ArrowSyncNodesDiagonal;
export { ArrowSyncNodesDiagonal };

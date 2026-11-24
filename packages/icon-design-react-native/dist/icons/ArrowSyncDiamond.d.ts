import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowSyncDiamondProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowSyncDiamond: ForwardRefExoticComponent<ArrowSyncDiamondProps & RefAttributes<Svg>>;

export default ArrowSyncDiamond;
export { ArrowSyncDiamond };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface BurstLVProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const BurstLV: ForwardRefExoticComponent<BurstLVProps & RefAttributes<Svg>>;

export default BurstLV;
export { BurstLV };

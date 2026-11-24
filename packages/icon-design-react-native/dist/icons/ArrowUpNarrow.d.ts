import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpNarrow: ForwardRefExoticComponent<ArrowUpNarrowProps & RefAttributes<Svg>>;

export default ArrowUpNarrow;
export { ArrowUpNarrow };

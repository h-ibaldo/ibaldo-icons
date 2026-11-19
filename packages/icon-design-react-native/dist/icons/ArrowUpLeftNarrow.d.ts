import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftNarrow: ForwardRefExoticComponent<ArrowUpLeftNarrowProps & RefAttributes<Svg>>;

export default ArrowUpLeftNarrow;
export { ArrowUpLeftNarrow };

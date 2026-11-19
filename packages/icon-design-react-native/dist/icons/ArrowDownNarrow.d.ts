import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownNarrow: ForwardRefExoticComponent<ArrowDownNarrowProps & RefAttributes<Svg>>;

export default ArrowDownNarrow;
export { ArrowDownNarrow };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftNarrow: ForwardRefExoticComponent<ArrowDownLeftNarrowProps & RefAttributes<Svg>>;

export default ArrowDownLeftNarrow;
export { ArrowDownLeftNarrow };

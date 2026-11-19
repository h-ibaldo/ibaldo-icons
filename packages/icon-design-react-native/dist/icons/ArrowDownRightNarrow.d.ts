import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightNarrow: ForwardRefExoticComponent<ArrowDownRightNarrowProps & RefAttributes<Svg>>;

export default ArrowDownRightNarrow;
export { ArrowDownRightNarrow };

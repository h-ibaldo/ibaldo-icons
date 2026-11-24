import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightNarrow: ForwardRefExoticComponent<ArrowRightNarrowProps & RefAttributes<Svg>>;

export default ArrowRightNarrow;
export { ArrowRightNarrow };

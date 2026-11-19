import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleSegmented: ForwardRefExoticComponent<ArrowUpCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowUpCircleSegmented;
export { ArrowUpCircleSegmented };

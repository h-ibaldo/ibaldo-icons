import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftCircleSegmented: ForwardRefExoticComponent<ArrowDownLeftCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowDownLeftCircleSegmented;
export { ArrowDownLeftCircleSegmented };

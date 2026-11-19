import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleSegmented: ForwardRefExoticComponent<ArrowDownCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowDownCircleSegmented;
export { ArrowDownCircleSegmented };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleSegmented: ForwardRefExoticComponent<ArrowLeftCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowLeftCircleSegmented;
export { ArrowLeftCircleSegmented };

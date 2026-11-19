import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftCircleSegmented: ForwardRefExoticComponent<ArrowUpLeftCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowUpLeftCircleSegmented;
export { ArrowUpLeftCircleSegmented };

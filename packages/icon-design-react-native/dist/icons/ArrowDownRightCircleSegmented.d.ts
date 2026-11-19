import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightCircleSegmentedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightCircleSegmented: ForwardRefExoticComponent<ArrowDownRightCircleSegmentedProps & RefAttributes<Svg>>;

export default ArrowDownRightCircleSegmented;
export { ArrowDownRightCircleSegmented };

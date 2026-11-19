import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftCircle: ForwardRefExoticComponent<ArrowUturnLeftCircleProps & RefAttributes<Svg>>;

export default ArrowUturnLeftCircle;
export { ArrowUturnLeftCircle };

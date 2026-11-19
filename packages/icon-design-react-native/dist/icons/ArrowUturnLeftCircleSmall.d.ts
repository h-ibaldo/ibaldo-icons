import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftCircleSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftCircleSmall: ForwardRefExoticComponent<ArrowUturnLeftCircleSmallProps & RefAttributes<Svg>>;

export default ArrowUturnLeftCircleSmall;
export { ArrowUturnLeftCircleSmall };

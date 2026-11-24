import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftFlippedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftFlippedCircle: ForwardRefExoticComponent<ArrowUturnLeftFlippedCircleProps & RefAttributes<Svg>>;

export default ArrowUturnLeftFlippedCircle;
export { ArrowUturnLeftFlippedCircle };

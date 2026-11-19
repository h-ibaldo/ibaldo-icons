import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownFlippedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownFlippedCircle: ForwardRefExoticComponent<ArrowUturnDownFlippedCircleProps & RefAttributes<Svg>>;

export default ArrowUturnDownFlippedCircle;
export { ArrowUturnDownFlippedCircle };

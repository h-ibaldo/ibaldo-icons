import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpFlippedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpFlippedCircle: ForwardRefExoticComponent<ArrowUturnUpFlippedCircleProps & RefAttributes<Svg>>;

export default ArrowUturnUpFlippedCircle;
export { ArrowUturnUpFlippedCircle };

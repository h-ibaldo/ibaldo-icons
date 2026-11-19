import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnRightFlippedCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnRightFlippedCircle: ForwardRefExoticComponent<ArrowUturnRightFlippedCircleProps & RefAttributes<Svg>>;

export default ArrowUturnRightFlippedCircle;
export { ArrowUturnRightFlippedCircle };

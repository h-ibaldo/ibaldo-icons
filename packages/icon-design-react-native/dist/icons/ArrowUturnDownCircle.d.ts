import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownCircle: ForwardRefExoticComponent<ArrowUturnDownCircleProps & RefAttributes<Svg>>;

export default ArrowUturnDownCircle;
export { ArrowUturnDownCircle };

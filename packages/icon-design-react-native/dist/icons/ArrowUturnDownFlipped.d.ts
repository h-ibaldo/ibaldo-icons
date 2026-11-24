import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownFlipped: ForwardRefExoticComponent<ArrowUturnDownFlippedProps & RefAttributes<Svg>>;

export default ArrowUturnDownFlipped;
export { ArrowUturnDownFlipped };

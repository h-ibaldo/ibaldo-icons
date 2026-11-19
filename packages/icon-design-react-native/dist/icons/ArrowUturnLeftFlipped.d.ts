import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftFlipped: ForwardRefExoticComponent<ArrowUturnLeftFlippedProps & RefAttributes<Svg>>;

export default ArrowUturnLeftFlipped;
export { ArrowUturnLeftFlipped };

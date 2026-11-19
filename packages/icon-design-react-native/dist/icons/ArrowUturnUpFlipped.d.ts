import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpFlipped: ForwardRefExoticComponent<ArrowUturnUpFlippedProps & RefAttributes<Svg>>;

export default ArrowUturnUpFlipped;
export { ArrowUturnUpFlipped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpFlippedLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpFlippedLong: ForwardRefExoticComponent<ArrowUturnUpFlippedLongProps & RefAttributes<Svg>>;

export default ArrowUturnUpFlippedLong;
export { ArrowUturnUpFlippedLong };

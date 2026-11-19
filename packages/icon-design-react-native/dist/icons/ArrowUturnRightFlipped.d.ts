import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnRightFlippedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnRightFlipped: ForwardRefExoticComponent<ArrowUturnRightFlippedProps & RefAttributes<Svg>>;

export default ArrowUturnRightFlipped;
export { ArrowUturnRightFlipped };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftSquareSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftSquareSmall: ForwardRefExoticComponent<ArrowUturnLeftSquareSmallProps & RefAttributes<Svg>>;

export default ArrowUturnLeftSquareSmall;
export { ArrowUturnLeftSquareSmall };

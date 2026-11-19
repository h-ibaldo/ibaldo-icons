import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeftLong: ForwardRefExoticComponent<ArrowUturnLeftLongProps & RefAttributes<Svg>>;

export default ArrowUturnLeftLong;
export { ArrowUturnLeftLong };

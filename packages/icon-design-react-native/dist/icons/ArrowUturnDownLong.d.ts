import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownLong: ForwardRefExoticComponent<ArrowUturnDownLongProps & RefAttributes<Svg>>;

export default ArrowUturnDownLong;
export { ArrowUturnDownLong };

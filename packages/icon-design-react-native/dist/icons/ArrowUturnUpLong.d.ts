import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnUpLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnUpLong: ForwardRefExoticComponent<ArrowUturnUpLongProps & RefAttributes<Svg>>;

export default ArrowUturnUpLong;
export { ArrowUturnUpLong };

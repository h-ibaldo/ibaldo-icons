import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnRightLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnRightLong: ForwardRefExoticComponent<ArrowUturnRightLongProps & RefAttributes<Svg>>;

export default ArrowUturnRightLong;
export { ArrowUturnRightLong };

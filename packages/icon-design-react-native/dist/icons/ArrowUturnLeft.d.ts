import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnLeft: ForwardRefExoticComponent<ArrowUturnLeftProps & RefAttributes<Svg>>;

export default ArrowUturnLeft;
export { ArrowUturnLeft };

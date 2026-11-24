import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDown: ForwardRefExoticComponent<ArrowUturnDownProps & RefAttributes<Svg>>;

export default ArrowUturnDown;
export { ArrowUturnDown };

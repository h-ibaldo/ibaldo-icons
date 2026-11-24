import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrollTextNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScrollTextNarrow: ForwardRefExoticComponent<ScrollTextNarrowProps & RefAttributes<Svg>>;

export default ScrollTextNarrow;
export { ScrollTextNarrow };

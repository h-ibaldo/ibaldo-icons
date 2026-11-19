import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrollNarrowProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScrollNarrow: ForwardRefExoticComponent<ScrollNarrowProps & RefAttributes<Svg>>;

export default ScrollNarrow;
export { ScrollNarrow };

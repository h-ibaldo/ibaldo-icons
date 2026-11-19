import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrollProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Scroll: ForwardRefExoticComponent<ScrollProps & RefAttributes<Svg>>;

export default Scroll;
export { Scroll };

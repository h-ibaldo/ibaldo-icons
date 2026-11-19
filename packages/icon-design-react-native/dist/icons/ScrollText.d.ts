import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ScrollTextProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ScrollText: ForwardRefExoticComponent<ScrollTextProps & RefAttributes<Svg>>;

export default ScrollText;
export { ScrollText };

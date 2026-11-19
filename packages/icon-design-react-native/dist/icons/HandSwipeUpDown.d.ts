import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpDownProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpDown: ForwardRefExoticComponent<HandSwipeUpDownProps & RefAttributes<Svg>>;

export default HandSwipeUpDown;
export { HandSwipeUpDown };

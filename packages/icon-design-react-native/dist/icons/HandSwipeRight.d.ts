import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeRight: ForwardRefExoticComponent<HandSwipeRightProps & RefAttributes<Svg>>;

export default HandSwipeRight;
export { HandSwipeRight };

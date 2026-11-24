import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftRight: ForwardRefExoticComponent<HandSwipeLeftRightProps & RefAttributes<Svg>>;

export default HandSwipeLeftRight;
export { HandSwipeLeftRight };

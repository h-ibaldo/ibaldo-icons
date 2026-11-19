import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUp: ForwardRefExoticComponent<HandSwipeUpProps & RefAttributes<Svg>>;

export default HandSwipeUp;
export { HandSwipeUp };

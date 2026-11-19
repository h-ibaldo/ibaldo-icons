import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpTwoFingers: ForwardRefExoticComponent<HandSwipeUpTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpTwoFingers;
export { HandSwipeUpTwoFingers };

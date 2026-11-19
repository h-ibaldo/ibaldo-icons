import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeUpDownTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeUpDownTwoFingers: ForwardRefExoticComponent<HandSwipeUpDownTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeUpDownTwoFingers;
export { HandSwipeUpDownTwoFingers };

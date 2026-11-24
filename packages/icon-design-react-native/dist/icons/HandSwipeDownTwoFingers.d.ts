import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeDownTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeDownTwoFingers: ForwardRefExoticComponent<HandSwipeDownTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeDownTwoFingers;
export { HandSwipeDownTwoFingers };

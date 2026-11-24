import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeRightTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeRightTwoFingers: ForwardRefExoticComponent<HandSwipeRightTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeRightTwoFingers;
export { HandSwipeRightTwoFingers };

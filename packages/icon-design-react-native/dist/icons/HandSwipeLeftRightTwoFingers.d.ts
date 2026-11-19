import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftRightTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftRightTwoFingers: ForwardRefExoticComponent<HandSwipeLeftRightTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftRightTwoFingers;
export { HandSwipeLeftRightTwoFingers };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface HandSwipeLeftTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const HandSwipeLeftTwoFingers: ForwardRefExoticComponent<HandSwipeLeftTwoFingersProps & RefAttributes<Svg>>;

export default HandSwipeLeftTwoFingers;
export { HandSwipeLeftTwoFingers };

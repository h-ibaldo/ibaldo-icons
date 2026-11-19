import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeLeftTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeftTwoFingers: ForwardRefExoticComponent<TouchSwipeLeftTwoFingersProps & RefAttributes<Svg>>;

export default TouchSwipeLeftTwoFingers;
export { TouchSwipeLeftTwoFingers };

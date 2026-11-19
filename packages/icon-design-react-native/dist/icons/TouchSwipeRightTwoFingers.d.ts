import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeRightTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRightTwoFingers: ForwardRefExoticComponent<TouchSwipeRightTwoFingersProps & RefAttributes<Svg>>;

export default TouchSwipeRightTwoFingers;
export { TouchSwipeRightTwoFingers };

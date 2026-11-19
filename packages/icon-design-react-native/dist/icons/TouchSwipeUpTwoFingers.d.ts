import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeUpTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUpTwoFingers: ForwardRefExoticComponent<TouchSwipeUpTwoFingersProps & RefAttributes<Svg>>;

export default TouchSwipeUpTwoFingers;
export { TouchSwipeUpTwoFingers };

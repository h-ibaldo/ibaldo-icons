import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeDownTwoFingersProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownTwoFingers: ForwardRefExoticComponent<TouchSwipeDownTwoFingersProps & RefAttributes<Svg>>;

export default TouchSwipeDownTwoFingers;
export { TouchSwipeDownTwoFingers };

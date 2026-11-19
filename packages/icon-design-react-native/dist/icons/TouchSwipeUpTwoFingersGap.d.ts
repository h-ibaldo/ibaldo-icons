import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeUpTwoFingersGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUpTwoFingersGap: ForwardRefExoticComponent<TouchSwipeUpTwoFingersGapProps & RefAttributes<Svg>>;

export default TouchSwipeUpTwoFingersGap;
export { TouchSwipeUpTwoFingersGap };

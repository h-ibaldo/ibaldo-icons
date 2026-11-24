import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeRightTwoFingersGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRightTwoFingersGap: ForwardRefExoticComponent<TouchSwipeRightTwoFingersGapProps & RefAttributes<Svg>>;

export default TouchSwipeRightTwoFingersGap;
export { TouchSwipeRightTwoFingersGap };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeLeftTwoFingersGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeftTwoFingersGap: ForwardRefExoticComponent<TouchSwipeLeftTwoFingersGapProps & RefAttributes<Svg>>;

export default TouchSwipeLeftTwoFingersGap;
export { TouchSwipeLeftTwoFingersGap };

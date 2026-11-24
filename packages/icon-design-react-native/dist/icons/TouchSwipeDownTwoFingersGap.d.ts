import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeDownTwoFingersGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownTwoFingersGap: ForwardRefExoticComponent<TouchSwipeDownTwoFingersGapProps & RefAttributes<Svg>>;

export default TouchSwipeDownTwoFingersGap;
export { TouchSwipeDownTwoFingersGap };

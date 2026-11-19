import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeRightGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRightGap: ForwardRefExoticComponent<TouchSwipeRightGapProps & RefAttributes<Svg>>;

export default TouchSwipeRightGap;
export { TouchSwipeRightGap };

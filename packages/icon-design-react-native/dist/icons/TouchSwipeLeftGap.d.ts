import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeLeftGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeftGap: ForwardRefExoticComponent<TouchSwipeLeftGapProps & RefAttributes<Svg>>;

export default TouchSwipeLeftGap;
export { TouchSwipeLeftGap };

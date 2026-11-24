import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeDownGapProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownGap: ForwardRefExoticComponent<TouchSwipeDownGapProps & RefAttributes<Svg>>;

export default TouchSwipeDownGap;
export { TouchSwipeDownGap };

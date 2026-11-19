import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeDownSquare: ForwardRefExoticComponent<TouchSwipeDownSquareProps & RefAttributes<Svg>>;

export default TouchSwipeDownSquare;
export { TouchSwipeDownSquare };

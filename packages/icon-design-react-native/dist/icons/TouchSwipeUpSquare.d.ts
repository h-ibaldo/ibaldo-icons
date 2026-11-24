import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeUpSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeUpSquare: ForwardRefExoticComponent<TouchSwipeUpSquareProps & RefAttributes<Svg>>;

export default TouchSwipeUpSquare;
export { TouchSwipeUpSquare };

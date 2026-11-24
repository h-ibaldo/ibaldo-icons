import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeRightSquare: ForwardRefExoticComponent<TouchSwipeRightSquareProps & RefAttributes<Svg>>;

export default TouchSwipeRightSquare;
export { TouchSwipeRightSquare };

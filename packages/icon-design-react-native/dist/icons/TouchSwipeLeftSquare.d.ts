import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface TouchSwipeLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const TouchSwipeLeftSquare: ForwardRefExoticComponent<TouchSwipeLeftSquareProps & RefAttributes<Svg>>;

export default TouchSwipeLeftSquare;
export { TouchSwipeLeftSquare };

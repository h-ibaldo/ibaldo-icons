import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnDownSquare: ForwardRefExoticComponent<ArrowUturnDownSquareProps & RefAttributes<Svg>>;

export default ArrowUturnDownSquare;
export { ArrowUturnDownSquare };

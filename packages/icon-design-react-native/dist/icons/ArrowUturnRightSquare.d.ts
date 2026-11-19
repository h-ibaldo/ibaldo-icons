import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUturnRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUturnRightSquare: ForwardRefExoticComponent<ArrowUturnRightSquareProps & RefAttributes<Svg>>;

export default ArrowUturnRightSquare;
export { ArrowUturnRightSquare };

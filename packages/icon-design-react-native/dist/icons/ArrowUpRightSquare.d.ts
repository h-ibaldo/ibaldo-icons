import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSquare: ForwardRefExoticComponent<ArrowUpRightSquareProps & RefAttributes<Svg>>;

export default ArrowUpRightSquare;
export { ArrowUpRightSquare };

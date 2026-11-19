import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightSquare: ForwardRefExoticComponent<ArrowRightSquareProps & RefAttributes<Svg>>;

export default ArrowRightSquare;
export { ArrowRightSquare };

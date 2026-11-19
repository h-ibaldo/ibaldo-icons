import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightSquare: ForwardRefExoticComponent<ArrowDownRightSquareProps & RefAttributes<Svg>>;

export default ArrowDownRightSquare;
export { ArrowDownRightSquare };

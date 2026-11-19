import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownSquare: ForwardRefExoticComponent<ArrowDownSquareProps & RefAttributes<Svg>>;

export default ArrowDownSquare;
export { ArrowDownSquare };

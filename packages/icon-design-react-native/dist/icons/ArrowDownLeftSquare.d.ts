import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftSquare: ForwardRefExoticComponent<ArrowDownLeftSquareProps & RefAttributes<Svg>>;

export default ArrowDownLeftSquare;
export { ArrowDownLeftSquare };

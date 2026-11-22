import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDiagonalOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalOut: ForwardRefExoticComponent<ArrowDiagonalOutProps & RefAttributes<Svg>>;

export default ArrowDiagonalOut;
export { ArrowDiagonalOut };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDiagonalOutLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalOutLeft: ForwardRefExoticComponent<ArrowDiagonalOutLeftProps & RefAttributes<Svg>>;

export default ArrowDiagonalOutLeft;
export { ArrowDiagonalOutLeft };

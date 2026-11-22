import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDiagonalInLeftProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalInLeft: ForwardRefExoticComponent<ArrowDiagonalInLeftProps & RefAttributes<Svg>>;

export default ArrowDiagonalInLeft;
export { ArrowDiagonalInLeft };

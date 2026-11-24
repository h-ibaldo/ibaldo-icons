import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDiagonalInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDiagonalIn: ForwardRefExoticComponent<ArrowDiagonalInProps & RefAttributes<Svg>>;

export default ArrowDiagonalIn;
export { ArrowDiagonalIn };

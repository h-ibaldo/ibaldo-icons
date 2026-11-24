import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpSquareOut: ForwardRefExoticComponent<ArrowUpSquareOutProps & RefAttributes<Svg>>;

export default ArrowUpSquareOut;
export { ArrowUpSquareOut };

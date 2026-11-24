import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSquareOut: ForwardRefExoticComponent<ArrowUpRightSquareOutProps & RefAttributes<Svg>>;

export default ArrowUpRightSquareOut;
export { ArrowUpRightSquareOut };

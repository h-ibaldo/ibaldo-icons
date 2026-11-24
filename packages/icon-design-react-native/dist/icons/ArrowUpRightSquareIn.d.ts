import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSquareInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSquareIn: ForwardRefExoticComponent<ArrowUpRightSquareInProps & RefAttributes<Svg>>;

export default ArrowUpRightSquareIn;
export { ArrowUpRightSquareIn };

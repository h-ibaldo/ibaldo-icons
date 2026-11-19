import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSquareOpen: ForwardRefExoticComponent<ArrowUpRightSquareOpenProps & RefAttributes<Svg>>;

export default ArrowUpRightSquareOpen;
export { ArrowUpRightSquareOpen };

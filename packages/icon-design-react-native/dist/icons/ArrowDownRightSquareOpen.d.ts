import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightSquareOpen: ForwardRefExoticComponent<ArrowDownRightSquareOpenProps & RefAttributes<Svg>>;

export default ArrowDownRightSquareOpen;
export { ArrowDownRightSquareOpen };

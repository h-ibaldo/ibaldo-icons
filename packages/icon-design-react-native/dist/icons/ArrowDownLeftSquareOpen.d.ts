import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftSquareOpenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftSquareOpen: ForwardRefExoticComponent<ArrowDownLeftSquareOpenProps & RefAttributes<Svg>>;

export default ArrowDownLeftSquareOpen;
export { ArrowDownLeftSquareOpen };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftSquareInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftSquareIn: ForwardRefExoticComponent<ArrowDownLeftSquareInProps & RefAttributes<Svg>>;

export default ArrowDownLeftSquareIn;
export { ArrowDownLeftSquareIn };

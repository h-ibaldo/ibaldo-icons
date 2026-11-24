import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftSquareOut: ForwardRefExoticComponent<ArrowDownLeftSquareOutProps & RefAttributes<Svg>>;

export default ArrowDownLeftSquareOut;
export { ArrowDownLeftSquareOut };

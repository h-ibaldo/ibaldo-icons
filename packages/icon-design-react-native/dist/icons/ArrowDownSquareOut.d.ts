import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownSquareOut: ForwardRefExoticComponent<ArrowDownSquareOutProps & RefAttributes<Svg>>;

export default ArrowDownSquareOut;
export { ArrowDownSquareOut };

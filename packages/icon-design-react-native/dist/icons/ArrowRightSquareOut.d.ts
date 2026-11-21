import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightSquareOut: ForwardRefExoticComponent<ArrowRightSquareOutProps & RefAttributes<Svg>>;

export default ArrowRightSquareOut;
export { ArrowRightSquareOut };

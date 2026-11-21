import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftSquareOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftSquareOut: ForwardRefExoticComponent<ArrowLeftSquareOutProps & RefAttributes<Svg>>;

export default ArrowLeftSquareOut;
export { ArrowLeftSquareOut };

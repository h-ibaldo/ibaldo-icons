import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftSquare: ForwardRefExoticComponent<ArrowLeftSquareProps & RefAttributes<Svg>>;

export default ArrowLeftSquare;
export { ArrowLeftSquare };

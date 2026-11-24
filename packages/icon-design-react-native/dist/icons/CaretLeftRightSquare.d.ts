import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CaretLeftRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CaretLeftRightSquare: ForwardRefExoticComponent<CaretLeftRightSquareProps & RefAttributes<Svg>>;

export default CaretLeftRightSquare;
export { CaretLeftRightSquare };

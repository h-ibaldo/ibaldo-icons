import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftRightSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeftRightSquare: ForwardRefExoticComponent<ChevronLeftRightSquareProps & RefAttributes<Svg>>;

export default ChevronLeftRightSquare;
export { ChevronLeftRightSquare };

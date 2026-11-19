import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftToBarSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeftToBarSquare: ForwardRefExoticComponent<ChevronLeftToBarSquareProps & RefAttributes<Svg>>;

export default ChevronLeftToBarSquare;
export { ChevronLeftToBarSquare };

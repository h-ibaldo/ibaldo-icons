import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpDownStaggeredSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownStaggeredSquare: ForwardRefExoticComponent<ChevronUpDownStaggeredSquareProps & RefAttributes<Svg>>;

export default ChevronUpDownStaggeredSquare;
export { ChevronUpDownStaggeredSquare };

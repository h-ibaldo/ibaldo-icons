import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightLeftStaggeredSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRightLeftStaggeredSquare: ForwardRefExoticComponent<ChevronRightLeftStaggeredSquareProps & RefAttributes<Svg>>;

export default ChevronRightLeftStaggeredSquare;
export { ChevronRightLeftStaggeredSquare };

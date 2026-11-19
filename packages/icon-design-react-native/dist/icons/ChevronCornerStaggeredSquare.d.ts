import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronCornerStaggeredSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronCornerStaggeredSquare: ForwardRefExoticComponent<ChevronCornerStaggeredSquareProps & RefAttributes<Svg>>;

export default ChevronCornerStaggeredSquare;
export { ChevronCornerStaggeredSquare };

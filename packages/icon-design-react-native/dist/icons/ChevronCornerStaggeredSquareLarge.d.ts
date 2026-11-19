import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronCornerStaggeredSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronCornerStaggeredSquareLarge: ForwardRefExoticComponent<ChevronCornerStaggeredSquareLargeProps & RefAttributes<Svg>>;

export default ChevronCornerStaggeredSquareLarge;
export { ChevronCornerStaggeredSquareLarge };

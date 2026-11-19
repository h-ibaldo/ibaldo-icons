import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpDownStaggeredSquareLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownStaggeredSquareLarge: ForwardRefExoticComponent<ChevronUpDownStaggeredSquareLargeProps & RefAttributes<Svg>>;

export default ChevronUpDownStaggeredSquareLarge;
export { ChevronUpDownStaggeredSquareLarge };

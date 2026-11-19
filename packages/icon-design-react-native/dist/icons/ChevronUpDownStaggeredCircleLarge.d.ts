import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpDownStaggeredCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpDownStaggeredCircleLarge: ForwardRefExoticComponent<ChevronUpDownStaggeredCircleLargeProps & RefAttributes<Svg>>;

export default ChevronUpDownStaggeredCircleLarge;
export { ChevronUpDownStaggeredCircleLarge };

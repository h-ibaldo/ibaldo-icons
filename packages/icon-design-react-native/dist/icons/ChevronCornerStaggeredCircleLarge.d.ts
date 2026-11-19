import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronCornerStaggeredCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronCornerStaggeredCircleLarge: ForwardRefExoticComponent<ChevronCornerStaggeredCircleLargeProps & RefAttributes<Svg>>;

export default ChevronCornerStaggeredCircleLarge;
export { ChevronCornerStaggeredCircleLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronRightLeftStaggeredCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronRightLeftStaggeredCircleLarge: ForwardRefExoticComponent<ChevronRightLeftStaggeredCircleLargeProps & RefAttributes<Svg>>;

export default ChevronRightLeftStaggeredCircleLarge;
export { ChevronRightLeftStaggeredCircleLarge };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleLarge: ForwardRefExoticComponent<ArrowUpCircleLargeProps & RefAttributes<Svg>>;

export default ArrowUpCircleLarge;
export { ArrowUpCircleLarge };

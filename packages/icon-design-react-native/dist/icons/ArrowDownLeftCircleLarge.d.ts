import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftCircleLarge: ForwardRefExoticComponent<ArrowDownLeftCircleLargeProps & RefAttributes<Svg>>;

export default ArrowDownLeftCircleLarge;
export { ArrowDownLeftCircleLarge };

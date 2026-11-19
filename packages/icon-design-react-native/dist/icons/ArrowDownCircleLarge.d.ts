import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleLarge: ForwardRefExoticComponent<ArrowDownCircleLargeProps & RefAttributes<Svg>>;

export default ArrowDownCircleLarge;
export { ArrowDownCircleLarge };

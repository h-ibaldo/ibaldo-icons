import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleLarge: ForwardRefExoticComponent<ArrowLeftCircleLargeProps & RefAttributes<Svg>>;

export default ArrowLeftCircleLarge;
export { ArrowLeftCircleLarge };

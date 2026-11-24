import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightCircleLarge: ForwardRefExoticComponent<ArrowRightCircleLargeProps & RefAttributes<Svg>>;

export default ArrowRightCircleLarge;
export { ArrowRightCircleLarge };

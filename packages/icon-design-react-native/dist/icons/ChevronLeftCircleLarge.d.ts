import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronLeftCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronLeftCircleLarge: ForwardRefExoticComponent<ChevronLeftCircleLargeProps & RefAttributes<Svg>>;

export default ChevronLeftCircleLarge;
export { ChevronLeftCircleLarge };

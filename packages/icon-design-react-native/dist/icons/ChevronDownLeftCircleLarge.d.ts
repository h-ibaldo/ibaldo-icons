import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownLeftCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownLeftCircleLarge: ForwardRefExoticComponent<ChevronDownLeftCircleLargeProps & RefAttributes<Svg>>;

export default ChevronDownLeftCircleLarge;
export { ChevronDownLeftCircleLarge };

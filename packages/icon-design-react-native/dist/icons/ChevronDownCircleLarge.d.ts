import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownCircleLarge: ForwardRefExoticComponent<ChevronDownCircleLargeProps & RefAttributes<Svg>>;

export default ChevronDownCircleLarge;
export { ChevronDownCircleLarge };

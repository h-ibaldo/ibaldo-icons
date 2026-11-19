import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpCircleLarge: ForwardRefExoticComponent<ChevronUpCircleLargeProps & RefAttributes<Svg>>;

export default ChevronUpCircleLarge;
export { ChevronUpCircleLarge };

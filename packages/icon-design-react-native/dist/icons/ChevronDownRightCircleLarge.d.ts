import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronDownRightCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronDownRightCircleLarge: ForwardRefExoticComponent<ChevronDownRightCircleLargeProps & RefAttributes<Svg>>;

export default ChevronDownRightCircleLarge;
export { ChevronDownRightCircleLarge };

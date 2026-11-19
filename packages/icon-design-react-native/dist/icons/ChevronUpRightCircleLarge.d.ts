import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ChevronUpRightCircleLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ChevronUpRightCircleLarge: ForwardRefExoticComponent<ChevronUpRightCircleLargeProps & RefAttributes<Svg>>;

export default ChevronUpRightCircleLarge;
export { ChevronUpRightCircleLarge };

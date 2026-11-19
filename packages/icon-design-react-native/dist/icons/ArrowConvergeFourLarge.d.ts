import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowConvergeFourLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowConvergeFourLarge: ForwardRefExoticComponent<ArrowConvergeFourLargeProps & RefAttributes<Svg>>;

export default ArrowConvergeFourLarge;
export { ArrowConvergeFourLarge };

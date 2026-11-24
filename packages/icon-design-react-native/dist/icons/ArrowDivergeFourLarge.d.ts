import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDivergeFourLargeProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDivergeFourLarge: ForwardRefExoticComponent<ArrowDivergeFourLargeProps & RefAttributes<Svg>>;

export default ArrowDivergeFourLarge;
export { ArrowDivergeFourLarge };

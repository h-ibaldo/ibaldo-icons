import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpFromDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpFromDot: ForwardRefExoticComponent<ArrowUpFromDotProps & RefAttributes<Svg>>;

export default ArrowUpFromDot;
export { ArrowUpFromDot };

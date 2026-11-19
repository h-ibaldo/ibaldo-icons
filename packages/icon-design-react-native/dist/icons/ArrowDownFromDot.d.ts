import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownFromDotProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownFromDot: ForwardRefExoticComponent<ArrowDownFromDotProps & RefAttributes<Svg>>;

export default ArrowDownFromDot;
export { ArrowDownFromDot };

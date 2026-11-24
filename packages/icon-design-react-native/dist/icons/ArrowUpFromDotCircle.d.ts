import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpFromDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpFromDotCircle: ForwardRefExoticComponent<ArrowUpFromDotCircleProps & RefAttributes<Svg>>;

export default ArrowUpFromDotCircle;
export { ArrowUpFromDotCircle };

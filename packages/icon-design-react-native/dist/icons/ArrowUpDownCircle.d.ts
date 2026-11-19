import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpDownCircle: ForwardRefExoticComponent<ArrowUpDownCircleProps & RefAttributes<Svg>>;

export default ArrowUpDownCircle;
export { ArrowUpDownCircle };

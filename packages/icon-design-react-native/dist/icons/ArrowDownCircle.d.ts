import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircle: ForwardRefExoticComponent<ArrowDownCircleProps & RefAttributes<Svg>>;

export default ArrowDownCircle;
export { ArrowDownCircle };

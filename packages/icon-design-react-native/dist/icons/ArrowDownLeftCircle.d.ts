import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftCircle: ForwardRefExoticComponent<ArrowDownLeftCircleProps & RefAttributes<Svg>>;

export default ArrowDownLeftCircle;
export { ArrowDownLeftCircle };

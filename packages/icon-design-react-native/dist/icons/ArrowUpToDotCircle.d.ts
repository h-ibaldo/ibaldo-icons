import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpToDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpToDotCircle: ForwardRefExoticComponent<ArrowUpToDotCircleProps & RefAttributes<Svg>>;

export default ArrowUpToDotCircle;
export { ArrowUpToDotCircle };

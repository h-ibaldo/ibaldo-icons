import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownToDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownToDotCircle: ForwardRefExoticComponent<ArrowDownToDotCircleProps & RefAttributes<Svg>>;

export default ArrowDownToDotCircle;
export { ArrowDownToDotCircle };

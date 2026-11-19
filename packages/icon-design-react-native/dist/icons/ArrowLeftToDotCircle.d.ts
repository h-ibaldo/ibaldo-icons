import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftToDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftToDotCircle: ForwardRefExoticComponent<ArrowLeftToDotCircleProps & RefAttributes<Svg>>;

export default ArrowLeftToDotCircle;
export { ArrowLeftToDotCircle };

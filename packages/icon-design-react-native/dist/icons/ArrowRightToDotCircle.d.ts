import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightToDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightToDotCircle: ForwardRefExoticComponent<ArrowRightToDotCircleProps & RefAttributes<Svg>>;

export default ArrowRightToDotCircle;
export { ArrowRightToDotCircle };

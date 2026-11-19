import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowRightFromDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowRightFromDotCircle: ForwardRefExoticComponent<ArrowRightFromDotCircleProps & RefAttributes<Svg>>;

export default ArrowRightFromDotCircle;
export { ArrowRightFromDotCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftFromDotCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftFromDotCircle: ForwardRefExoticComponent<ArrowLeftFromDotCircleProps & RefAttributes<Svg>>;

export default ArrowLeftFromDotCircle;
export { ArrowLeftFromDotCircle };

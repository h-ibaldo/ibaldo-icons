import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircle: ForwardRefExoticComponent<ArrowLeftCircleProps & RefAttributes<Svg>>;

export default ArrowLeftCircle;
export { ArrowLeftCircle };

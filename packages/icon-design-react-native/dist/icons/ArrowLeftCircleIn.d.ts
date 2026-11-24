import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleIn: ForwardRefExoticComponent<ArrowLeftCircleInProps & RefAttributes<Svg>>;

export default ArrowLeftCircleIn;
export { ArrowLeftCircleIn };

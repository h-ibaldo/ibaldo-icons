import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftCircleOut: ForwardRefExoticComponent<ArrowLeftCircleOutProps & RefAttributes<Svg>>;

export default ArrowLeftCircleOut;
export { ArrowLeftCircleOut };

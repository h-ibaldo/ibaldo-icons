import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftCircleOut: ForwardRefExoticComponent<ArrowDownLeftCircleOutProps & RefAttributes<Svg>>;

export default ArrowDownLeftCircleOut;
export { ArrowDownLeftCircleOut };

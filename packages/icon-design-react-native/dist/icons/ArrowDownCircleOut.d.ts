import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleOut: ForwardRefExoticComponent<ArrowDownCircleOutProps & RefAttributes<Svg>>;

export default ArrowDownCircleOut;
export { ArrowDownCircleOut };

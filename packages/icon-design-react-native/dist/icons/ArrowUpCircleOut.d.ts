import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleOut: ForwardRefExoticComponent<ArrowUpCircleOutProps & RefAttributes<Svg>>;

export default ArrowUpCircleOut;
export { ArrowUpCircleOut };

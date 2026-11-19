import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftCircleOutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftCircleOut: ForwardRefExoticComponent<ArrowUpLeftCircleOutProps & RefAttributes<Svg>>;

export default ArrowUpLeftCircleOut;
export { ArrowUpLeftCircleOut };

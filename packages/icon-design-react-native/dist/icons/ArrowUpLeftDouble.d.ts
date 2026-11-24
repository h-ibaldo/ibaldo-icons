import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftDouble: ForwardRefExoticComponent<ArrowUpLeftDoubleProps & RefAttributes<Svg>>;

export default ArrowUpLeftDouble;
export { ArrowUpLeftDouble };

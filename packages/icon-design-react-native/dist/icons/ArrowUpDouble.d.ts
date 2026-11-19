import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpDouble: ForwardRefExoticComponent<ArrowUpDoubleProps & RefAttributes<Svg>>;

export default ArrowUpDouble;
export { ArrowUpDouble };

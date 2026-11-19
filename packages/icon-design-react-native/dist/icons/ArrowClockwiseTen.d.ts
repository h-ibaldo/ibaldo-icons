import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowClockwiseTenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowClockwiseTen: ForwardRefExoticComponent<ArrowClockwiseTenProps & RefAttributes<Svg>>;

export default ArrowClockwiseTen;
export { ArrowClockwiseTen };

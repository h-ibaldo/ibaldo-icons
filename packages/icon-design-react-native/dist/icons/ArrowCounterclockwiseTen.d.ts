import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowCounterclockwiseTenProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowCounterclockwiseTen: ForwardRefExoticComponent<ArrowCounterclockwiseTenProps & RefAttributes<Svg>>;

export default ArrowCounterclockwiseTen;
export { ArrowCounterclockwiseTen };

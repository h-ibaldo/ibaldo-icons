import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightDoubleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightDouble: ForwardRefExoticComponent<ArrowUpRightDoubleProps & RefAttributes<Svg>>;

export default ArrowUpRightDouble;
export { ArrowUpRightDouble };

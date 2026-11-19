import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRight: ForwardRefExoticComponent<ArrowUpRightProps & RefAttributes<Svg>>;

export default ArrowUpRight;
export { ArrowUpRight };

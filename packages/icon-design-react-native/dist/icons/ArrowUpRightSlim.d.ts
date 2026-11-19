import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpRightSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpRightSlim: ForwardRefExoticComponent<ArrowUpRightSlimProps & RefAttributes<Svg>>;

export default ArrowUpRightSlim;
export { ArrowUpRightSlim };

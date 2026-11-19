import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpSlim: ForwardRefExoticComponent<ArrowUpSlimProps & RefAttributes<Svg>>;

export default ArrowUpSlim;
export { ArrowUpSlim };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownSlim: ForwardRefExoticComponent<ArrowDownSlimProps & RefAttributes<Svg>>;

export default ArrowDownSlim;
export { ArrowDownSlim };

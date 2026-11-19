import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownLeftSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownLeftSlim: ForwardRefExoticComponent<ArrowDownLeftSlimProps & RefAttributes<Svg>>;

export default ArrowDownLeftSlim;
export { ArrowDownLeftSlim };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowLeftSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowLeftSlim: ForwardRefExoticComponent<ArrowLeftSlimProps & RefAttributes<Svg>>;

export default ArrowLeftSlim;
export { ArrowLeftSlim };

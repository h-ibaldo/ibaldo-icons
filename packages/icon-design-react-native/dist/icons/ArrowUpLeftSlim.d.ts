import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpLeftSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpLeftSlim: ForwardRefExoticComponent<ArrowUpLeftSlimProps & RefAttributes<Svg>>;

export default ArrowUpLeftSlim;
export { ArrowUpLeftSlim };

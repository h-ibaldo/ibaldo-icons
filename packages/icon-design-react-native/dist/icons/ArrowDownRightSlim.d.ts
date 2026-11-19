import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownRightSlimProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownRightSlim: ForwardRefExoticComponent<ArrowDownRightSlimProps & RefAttributes<Svg>>;

export default ArrowDownRightSlim;
export { ArrowDownRightSlim };

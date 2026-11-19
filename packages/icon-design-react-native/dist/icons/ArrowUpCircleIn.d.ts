import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleInProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleIn: ForwardRefExoticComponent<ArrowUpCircleInProps & RefAttributes<Svg>>;

export default ArrowUpCircleIn;
export { ArrowUpCircleIn };

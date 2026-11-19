import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleDashedHalf: ForwardRefExoticComponent<ArrowUpCircleDashedHalfProps & RefAttributes<Svg>>;

export default ArrowUpCircleDashedHalf;
export { ArrowUpCircleDashedHalf };

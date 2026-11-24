import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleDashedLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleDashedLong: ForwardRefExoticComponent<ArrowUpCircleDashedLongProps & RefAttributes<Svg>>;

export default ArrowUpCircleDashedLong;
export { ArrowUpCircleDashedLong };

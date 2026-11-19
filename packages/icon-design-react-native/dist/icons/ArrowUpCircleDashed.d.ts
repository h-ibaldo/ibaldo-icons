import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowUpCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowUpCircleDashed: ForwardRefExoticComponent<ArrowUpCircleDashedProps & RefAttributes<Svg>>;

export default ArrowUpCircleDashed;
export { ArrowUpCircleDashed };

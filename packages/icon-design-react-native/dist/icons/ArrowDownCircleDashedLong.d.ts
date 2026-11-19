import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleDashedLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleDashedLong: ForwardRefExoticComponent<ArrowDownCircleDashedLongProps & RefAttributes<Svg>>;

export default ArrowDownCircleDashedLong;
export { ArrowDownCircleDashedLong };

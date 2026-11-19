import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleDashedHalf: ForwardRefExoticComponent<ArrowDownCircleDashedHalfProps & RefAttributes<Svg>>;

export default ArrowDownCircleDashedHalf;
export { ArrowDownCircleDashedHalf };

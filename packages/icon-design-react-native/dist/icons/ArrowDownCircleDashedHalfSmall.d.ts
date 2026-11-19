import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface ArrowDownCircleDashedHalfSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const ArrowDownCircleDashedHalfSmall: ForwardRefExoticComponent<ArrowDownCircleDashedHalfSmallProps & RefAttributes<Svg>>;

export default ArrowDownCircleDashedHalfSmall;
export { ArrowDownCircleDashedHalfSmall };

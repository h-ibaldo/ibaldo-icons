import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedHalfLongProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedHalfLong: ForwardRefExoticComponent<CheckCircleDashedHalfLongProps & RefAttributes<Svg>>;

export default CheckCircleDashedHalfLong;
export { CheckCircleDashedHalfLong };

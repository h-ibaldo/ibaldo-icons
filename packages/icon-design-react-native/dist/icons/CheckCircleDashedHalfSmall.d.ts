import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedHalfSmallProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedHalfSmall: ForwardRefExoticComponent<CheckCircleDashedHalfSmallProps & RefAttributes<Svg>>;

export default CheckCircleDashedHalfSmall;
export { CheckCircleDashedHalfSmall };

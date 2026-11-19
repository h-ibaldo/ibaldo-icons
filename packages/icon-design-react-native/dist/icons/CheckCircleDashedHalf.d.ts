import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedHalfProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedHalf: ForwardRefExoticComponent<CheckCircleDashedHalfProps & RefAttributes<Svg>>;

export default CheckCircleDashedHalf;
export { CheckCircleDashedHalf };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedHalfBottomProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedHalfBottom: ForwardRefExoticComponent<CheckCircleDashedHalfBottomProps & RefAttributes<Svg>>;

export default CheckCircleDashedHalfBottom;
export { CheckCircleDashedHalfBottom };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedQuarterProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashedQuarter: ForwardRefExoticComponent<CheckCircleDashedQuarterProps & RefAttributes<Svg>>;

export default CheckCircleDashedQuarter;
export { CheckCircleDashedQuarter };

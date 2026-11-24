import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleDashedProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleDashed: ForwardRefExoticComponent<CheckCircleDashedProps & RefAttributes<Svg>>;

export default CheckCircleDashed;
export { CheckCircleDashed };

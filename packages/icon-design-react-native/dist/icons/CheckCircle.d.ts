import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircle: ForwardRefExoticComponent<CheckCircleProps & RefAttributes<Svg>>;

export default CheckCircle;
export { CheckCircle };

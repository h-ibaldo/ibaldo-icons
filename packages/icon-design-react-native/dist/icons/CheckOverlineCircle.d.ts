import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckOverlineCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckOverlineCircle: ForwardRefExoticComponent<CheckOverlineCircleProps & RefAttributes<Svg>>;

export default CheckOverlineCircle;
export { CheckOverlineCircle };

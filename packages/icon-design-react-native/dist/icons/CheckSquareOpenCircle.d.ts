import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareOpenCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenCircle: ForwardRefExoticComponent<CheckSquareOpenCircleProps & RefAttributes<Svg>>;

export default CheckSquareOpenCircle;
export { CheckSquareOpenCircle };

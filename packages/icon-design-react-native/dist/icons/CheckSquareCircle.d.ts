import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareCircle: ForwardRefExoticComponent<CheckSquareCircleProps & RefAttributes<Svg>>;

export default CheckSquareCircle;
export { CheckSquareCircle };

import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckSquareOpenSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckSquareOpenSquare: ForwardRefExoticComponent<CheckSquareOpenSquareProps & RefAttributes<Svg>>;

export default CheckSquareOpenSquare;
export { CheckSquareOpenSquare };

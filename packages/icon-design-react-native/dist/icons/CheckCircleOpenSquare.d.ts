import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckCircleOpenSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckCircleOpenSquare: ForwardRefExoticComponent<CheckCircleOpenSquareProps & RefAttributes<Svg>>;

export default CheckCircleOpenSquare;
export { CheckCircleOpenSquare };

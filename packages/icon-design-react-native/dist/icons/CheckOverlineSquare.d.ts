import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckOverlineSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckOverlineSquare: ForwardRefExoticComponent<CheckOverlineSquareProps & RefAttributes<Svg>>;

export default CheckOverlineSquare;
export { CheckOverlineSquare };

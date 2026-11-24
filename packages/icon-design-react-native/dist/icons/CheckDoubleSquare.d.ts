import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface CheckDoubleSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const CheckDoubleSquare: ForwardRefExoticComponent<CheckDoubleSquareProps & RefAttributes<Svg>>;

export default CheckDoubleSquare;
export { CheckDoubleSquare };

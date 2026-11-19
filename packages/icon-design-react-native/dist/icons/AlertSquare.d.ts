import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertSquare: ForwardRefExoticComponent<AlertSquareProps & RefAttributes<Svg>>;

export default AlertSquare;
export { AlertSquare };

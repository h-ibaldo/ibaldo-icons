import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface AlertSquareStackProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const AlertSquareStack: ForwardRefExoticComponent<AlertSquareStackProps & RefAttributes<Svg>>;

export default AlertSquareStack;
export { AlertSquareStack };

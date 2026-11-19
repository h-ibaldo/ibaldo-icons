import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LoginSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LoginSquare: ForwardRefExoticComponent<LoginSquareProps & RefAttributes<Svg>>;

export default LoginSquare;
export { LoginSquare };

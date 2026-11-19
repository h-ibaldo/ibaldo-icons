import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LogoutSquareProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LogoutSquare: ForwardRefExoticComponent<LogoutSquareProps & RefAttributes<Svg>>;

export default LogoutSquare;
export { LogoutSquare };

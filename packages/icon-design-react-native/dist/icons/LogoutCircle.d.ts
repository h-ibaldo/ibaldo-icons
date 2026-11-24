import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LogoutCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LogoutCircle: ForwardRefExoticComponent<LogoutCircleProps & RefAttributes<Svg>>;

export default LogoutCircle;
export { LogoutCircle };

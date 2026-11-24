import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LogoutProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const Logout: ForwardRefExoticComponent<LogoutProps & RefAttributes<Svg>>;

export default Logout;
export { Logout };

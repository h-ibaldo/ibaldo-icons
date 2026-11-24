import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LogoutWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LogoutWide: ForwardRefExoticComponent<LogoutWideProps & RefAttributes<Svg>>;

export default LogoutWide;
export { LogoutWide };

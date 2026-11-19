import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LoginWideProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LoginWide: ForwardRefExoticComponent<LoginWideProps & RefAttributes<Svg>>;

export default LoginWide;
export { LoginWide };

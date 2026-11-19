import type { ForwardRefExoticComponent, RefAttributes } from 'react';
import type { SvgProps } from 'react-native-svg';
import type Svg from 'react-native-svg';

export interface LoginCircleProps extends SvgProps {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
}

declare const LoginCircle: ForwardRefExoticComponent<LoginCircleProps & RefAttributes<Svg>>;

export default LoginCircle;
export { LoginCircle };

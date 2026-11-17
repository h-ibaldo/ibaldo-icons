import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoginProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Login: ForwardRefExoticComponent<LoginProps & RefAttributes<SVGSVGElement>>;

export default Login;
export { Login };

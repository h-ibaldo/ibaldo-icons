import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoginCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoginCircle: ForwardRefExoticComponent<LoginCircleProps & RefAttributes<SVGSVGElement>>;

export default LoginCircle;
export { LoginCircle };

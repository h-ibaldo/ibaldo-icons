import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoginSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoginSquare: ForwardRefExoticComponent<LoginSquareProps & RefAttributes<SVGSVGElement>>;

export default LoginSquare;
export { LoginSquare };

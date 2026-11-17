import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LoginWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LoginWide: ForwardRefExoticComponent<LoginWideProps & RefAttributes<SVGSVGElement>>;

export default LoginWide;
export { LoginWide };

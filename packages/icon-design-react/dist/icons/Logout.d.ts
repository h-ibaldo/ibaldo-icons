import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LogoutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Logout: ForwardRefExoticComponent<LogoutProps & RefAttributes<SVGSVGElement>>;

export default Logout;
export { Logout };

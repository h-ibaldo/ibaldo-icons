import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LogoutArrowOutProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LogoutArrowOut: ForwardRefExoticComponent<LogoutArrowOutProps & RefAttributes<SVGSVGElement>>;

export default LogoutArrowOut;
export { LogoutArrowOut };

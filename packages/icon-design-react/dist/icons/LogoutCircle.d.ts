import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LogoutCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LogoutCircle: ForwardRefExoticComponent<LogoutCircleProps & RefAttributes<SVGSVGElement>>;

export default LogoutCircle;
export { LogoutCircle };

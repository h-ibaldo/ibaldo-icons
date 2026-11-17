import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LogoutSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LogoutSquare: ForwardRefExoticComponent<LogoutSquareProps & RefAttributes<SVGSVGElement>>;

export default LogoutSquare;
export { LogoutSquare };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface LogoutWideProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const LogoutWide: ForwardRefExoticComponent<LogoutWideProps & RefAttributes<SVGSVGElement>>;

export default LogoutWide;
export { LogoutWide };

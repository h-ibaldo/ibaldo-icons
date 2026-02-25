import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle22Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle22: ForwardRefExoticComponent<ConnectCircle22Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle22;
export { ConnectCircle22 };

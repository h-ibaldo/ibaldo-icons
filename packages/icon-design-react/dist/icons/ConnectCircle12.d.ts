import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle12: ForwardRefExoticComponent<ConnectCircle12Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle12;
export { ConnectCircle12 };

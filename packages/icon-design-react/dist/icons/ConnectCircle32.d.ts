import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectCircle32Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectCircle32: ForwardRefExoticComponent<ConnectCircle32Props & RefAttributes<SVGSVGElement>>;

export default ConnectCircle32;
export { ConnectCircle32 };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectTriange12Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectTriange12: ForwardRefExoticComponent<ConnectTriange12Props & RefAttributes<SVGSVGElement>>;

export default ConnectTriange12;
export { ConnectTriange12 };

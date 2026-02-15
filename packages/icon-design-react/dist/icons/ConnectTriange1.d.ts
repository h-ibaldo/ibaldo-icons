import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectTriange1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectTriange1: ForwardRefExoticComponent<ConnectTriange1Props & RefAttributes<SVGSVGElement>>;

export default ConnectTriange1;
export { ConnectTriange1 };

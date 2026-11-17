import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectTriangle1Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectTriangle1: ForwardRefExoticComponent<ConnectTriangle1Props & RefAttributes<SVGSVGElement>>;

export default ConnectTriangle1;
export { ConnectTriangle1 };

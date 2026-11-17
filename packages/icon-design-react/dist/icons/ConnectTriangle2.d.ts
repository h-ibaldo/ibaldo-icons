import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ConnectTriangle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ConnectTriangle2: ForwardRefExoticComponent<ConnectTriangle2Props & RefAttributes<SVGSVGElement>>;

export default ConnectTriangle2;
export { ConnectTriangle2 };

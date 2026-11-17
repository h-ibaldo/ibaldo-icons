import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkDotsProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkDots: ForwardRefExoticComponent<CloudNetworkDotsProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkDots;
export { CloudNetworkDots };

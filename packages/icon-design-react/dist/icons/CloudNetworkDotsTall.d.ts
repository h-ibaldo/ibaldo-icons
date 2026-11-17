import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkDotsTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkDotsTall: ForwardRefExoticComponent<CloudNetworkDotsTallProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkDotsTall;
export { CloudNetworkDotsTall };

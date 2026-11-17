import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkTall: ForwardRefExoticComponent<CloudNetworkTallProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkTall;
export { CloudNetworkTall };

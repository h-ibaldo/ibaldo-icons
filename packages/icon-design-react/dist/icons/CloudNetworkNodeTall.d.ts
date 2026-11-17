import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkNodeTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkNodeTall: ForwardRefExoticComponent<CloudNetworkNodeTallProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkNodeTall;
export { CloudNetworkNodeTall };

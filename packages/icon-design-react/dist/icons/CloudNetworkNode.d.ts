import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkNodeProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkNode: ForwardRefExoticComponent<CloudNetworkNodeProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkNode;
export { CloudNetworkNode };

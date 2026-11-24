import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetwork: ForwardRefExoticComponent<CloudNetworkProps & RefAttributes<SVGSVGElement>>;

export default CloudNetwork;
export { CloudNetwork };

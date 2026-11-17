import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkSecondProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkSecond: ForwardRefExoticComponent<CloudNetworkSecondProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkSecond;
export { CloudNetworkSecond };

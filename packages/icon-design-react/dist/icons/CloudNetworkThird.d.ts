import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkThirdProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkThird: ForwardRefExoticComponent<CloudNetworkThirdProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkThird;
export { CloudNetworkThird };

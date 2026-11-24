import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkRound: ForwardRefExoticComponent<CloudNetworkRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkRound;
export { CloudNetworkRound };

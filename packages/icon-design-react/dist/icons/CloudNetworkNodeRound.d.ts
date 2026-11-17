import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CloudNetworkNodeRoundProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CloudNetworkNodeRound: ForwardRefExoticComponent<CloudNetworkNodeRoundProps & RefAttributes<SVGSVGElement>>;

export default CloudNetworkNodeRound;
export { CloudNetworkNodeRound };

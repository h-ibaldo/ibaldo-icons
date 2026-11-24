import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesRingProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesRing: ForwardRefExoticComponent<NodesRingProps & RefAttributes<SVGSVGElement>>;

export default NodesRing;
export { NodesRing };

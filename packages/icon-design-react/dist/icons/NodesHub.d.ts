import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesHubProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesHub: ForwardRefExoticComponent<NodesHubProps & RefAttributes<SVGSVGElement>>;

export default NodesHub;
export { NodesHub };

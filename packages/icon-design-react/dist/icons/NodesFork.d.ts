import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesForkProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesFork: ForwardRefExoticComponent<NodesForkProps & RefAttributes<SVGSVGElement>>;

export default NodesFork;
export { NodesFork };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesZigzagProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesZigzag: ForwardRefExoticComponent<NodesZigzagProps & RefAttributes<SVGSVGElement>>;

export default NodesZigzag;
export { NodesZigzag };

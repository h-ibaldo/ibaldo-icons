import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesTriangle: ForwardRefExoticComponent<NodesTriangleProps & RefAttributes<SVGSVGElement>>;

export default NodesTriangle;
export { NodesTriangle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface NodesTriangleUprightProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const NodesTriangleUpright: ForwardRefExoticComponent<NodesTriangleUprightProps & RefAttributes<SVGSVGElement>>;

export default NodesTriangleUpright;
export { NodesTriangleUpright };

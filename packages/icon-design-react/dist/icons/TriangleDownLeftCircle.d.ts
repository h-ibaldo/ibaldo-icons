import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleDownLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleDownLeftCircle: ForwardRefExoticComponent<TriangleDownLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleDownLeftCircle;
export { TriangleDownLeftCircle };

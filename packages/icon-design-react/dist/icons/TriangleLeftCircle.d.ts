import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleLeftCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleLeftCircle: ForwardRefExoticComponent<TriangleLeftCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleLeftCircle;
export { TriangleLeftCircle };

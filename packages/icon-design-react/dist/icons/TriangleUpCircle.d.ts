import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleUpCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleUpCircle: ForwardRefExoticComponent<TriangleUpCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleUpCircle;
export { TriangleUpCircle };

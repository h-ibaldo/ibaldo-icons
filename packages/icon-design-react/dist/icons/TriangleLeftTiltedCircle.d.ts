import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleLeftTiltedCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleLeftTiltedCircle: ForwardRefExoticComponent<TriangleLeftTiltedCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleLeftTiltedCircle;
export { TriangleLeftTiltedCircle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleRightTiltedCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleRightTiltedCircle: ForwardRefExoticComponent<TriangleRightTiltedCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleRightTiltedCircle;
export { TriangleRightTiltedCircle };

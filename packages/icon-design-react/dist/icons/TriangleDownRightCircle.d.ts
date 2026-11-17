import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface TriangleDownRightCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const TriangleDownRightCircle: ForwardRefExoticComponent<TriangleDownRightCircleProps & RefAttributes<SVGSVGElement>>;

export default TriangleDownRightCircle;
export { TriangleDownRightCircle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockTriangleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ClockTriangle: ForwardRefExoticComponent<ClockTriangleProps & RefAttributes<SVGSVGElement>>;

export default ClockTriangle;
export { ClockTriangle };

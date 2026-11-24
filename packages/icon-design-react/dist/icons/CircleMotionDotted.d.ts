import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleMotionDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleMotionDotted: ForwardRefExoticComponent<CircleMotionDottedProps & RefAttributes<SVGSVGElement>>;

export default CircleMotionDotted;
export { CircleMotionDotted };

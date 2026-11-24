import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface CircleOverlapProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const CircleOverlap: ForwardRefExoticComponent<CircleOverlapProps & RefAttributes<SVGSVGElement>>;

export default CircleOverlap;
export { CircleOverlap };

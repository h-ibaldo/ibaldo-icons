import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripHorizontalCirclesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripHorizontalCircles: ForwardRefExoticComponent<GripHorizontalCirclesProps & RefAttributes<SVGSVGElement>>;

export default GripHorizontalCircles;
export { GripHorizontalCircles };

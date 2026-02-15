import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripVerticalCirclesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripVerticalCircles: ForwardRefExoticComponent<GripVerticalCirclesProps & RefAttributes<SVGSVGElement>>;

export default GripVerticalCircles;
export { GripVerticalCircles };

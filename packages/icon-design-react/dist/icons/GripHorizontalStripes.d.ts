import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripHorizontalStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripHorizontalStripes: ForwardRefExoticComponent<GripHorizontalStripesProps & RefAttributes<SVGSVGElement>>;

export default GripHorizontalStripes;
export { GripHorizontalStripes };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface GripVerticalStripesProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const GripVerticalStripes: ForwardRefExoticComponent<GripVerticalStripesProps & RefAttributes<SVGSVGElement>>;

export default GripVerticalStripes;
export { GripVerticalStripes };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface SunCircleSplitSparseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const SunCircleSplitSparse: ForwardRefExoticComponent<SunCircleSplitSparseProps & RefAttributes<SVGSVGElement>>;

export default SunCircleSplitSparse;
export { SunCircleSplitSparse };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpCircleSegmented: ForwardRefExoticComponent<ArrowUpCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpCircleSegmented;
export { ArrowUpCircleSegmented };

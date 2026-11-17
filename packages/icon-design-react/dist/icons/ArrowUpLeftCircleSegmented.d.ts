import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpLeftCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpLeftCircleSegmented: ForwardRefExoticComponent<ArrowUpLeftCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpLeftCircleSegmented;
export { ArrowUpLeftCircleSegmented };

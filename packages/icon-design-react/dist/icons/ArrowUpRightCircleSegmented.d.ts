import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowUpRightCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowUpRightCircleSegmented: ForwardRefExoticComponent<ArrowUpRightCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowUpRightCircleSegmented;
export { ArrowUpRightCircleSegmented };

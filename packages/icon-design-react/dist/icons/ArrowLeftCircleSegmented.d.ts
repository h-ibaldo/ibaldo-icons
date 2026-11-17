import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowLeftCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowLeftCircleSegmented: ForwardRefExoticComponent<ArrowLeftCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowLeftCircleSegmented;
export { ArrowLeftCircleSegmented };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowRightCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowRightCircleSegmented: ForwardRefExoticComponent<ArrowRightCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowRightCircleSegmented;
export { ArrowRightCircleSegmented };

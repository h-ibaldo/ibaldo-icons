import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownCircleSegmented: ForwardRefExoticComponent<ArrowDownCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownCircleSegmented;
export { ArrowDownCircleSegmented };

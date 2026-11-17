import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowDownRightCircleSegmentedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowDownRightCircleSegmented: ForwardRefExoticComponent<ArrowDownRightCircleSegmentedProps & RefAttributes<SVGSVGElement>>;

export default ArrowDownRightCircleSegmented;
export { ArrowDownRightCircleSegmented };

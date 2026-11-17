import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseXCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseXCircle: ForwardRefExoticComponent<ArrowClockwiseXCircleProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseXCircle;
export { ArrowClockwiseXCircle };

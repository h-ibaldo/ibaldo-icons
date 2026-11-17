import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseX: ForwardRefExoticComponent<ArrowClockwiseXProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseX;
export { ArrowClockwiseX };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowClockwiseThirtyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowClockwiseThirty: ForwardRefExoticComponent<ArrowClockwiseThirtyProps & RefAttributes<SVGSVGElement>>;

export default ArrowClockwiseThirty;
export { ArrowClockwiseThirty };

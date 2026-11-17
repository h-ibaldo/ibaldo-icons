import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncClockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncClockwise: ForwardRefExoticComponent<ArrowSyncClockwiseProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncClockwise;
export { ArrowSyncClockwise };

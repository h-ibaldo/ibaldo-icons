import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncClockwiseOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncClockwiseOff: ForwardRefExoticComponent<ArrowSyncClockwiseOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncClockwiseOff;
export { ArrowSyncClockwiseOff };

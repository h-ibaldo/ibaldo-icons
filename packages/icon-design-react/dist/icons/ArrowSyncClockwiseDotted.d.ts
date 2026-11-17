import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncClockwiseDottedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncClockwiseDotted: ForwardRefExoticComponent<ArrowSyncClockwiseDottedProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncClockwiseDotted;
export { ArrowSyncClockwiseDotted };

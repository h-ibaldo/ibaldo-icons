import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncClockwiseAngularProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncClockwiseAngular: ForwardRefExoticComponent<ArrowSyncClockwiseAngularProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncClockwiseAngular;
export { ArrowSyncClockwiseAngular };

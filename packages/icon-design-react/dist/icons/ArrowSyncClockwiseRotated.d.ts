import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncClockwiseRotatedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncClockwiseRotated: ForwardRefExoticComponent<ArrowSyncClockwiseRotatedProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncClockwiseRotated;
export { ArrowSyncClockwiseRotated };

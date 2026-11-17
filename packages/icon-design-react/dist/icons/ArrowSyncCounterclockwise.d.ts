import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncCounterclockwiseProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncCounterclockwise: ForwardRefExoticComponent<ArrowSyncCounterclockwiseProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncCounterclockwise;
export { ArrowSyncCounterclockwise };

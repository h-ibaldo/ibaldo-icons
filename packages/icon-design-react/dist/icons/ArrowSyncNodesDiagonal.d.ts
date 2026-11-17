import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncNodesDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncNodesDiagonal: ForwardRefExoticComponent<ArrowSyncNodesDiagonalProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncNodesDiagonal;
export { ArrowSyncNodesDiagonal };

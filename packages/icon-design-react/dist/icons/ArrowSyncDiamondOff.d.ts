import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ArrowSyncDiamondOffProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ArrowSyncDiamondOff: ForwardRefExoticComponent<ArrowSyncDiamondOffProps & RefAttributes<SVGSVGElement>>;

export default ArrowSyncDiamondOff;
export { ArrowSyncDiamondOff };

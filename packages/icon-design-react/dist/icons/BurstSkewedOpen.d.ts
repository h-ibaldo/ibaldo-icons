import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BurstSkewedOpenProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BurstSkewedOpen: ForwardRefExoticComponent<BurstSkewedOpenProps & RefAttributes<SVGSVGElement>>;

export default BurstSkewedOpen;
export { BurstSkewedOpen };

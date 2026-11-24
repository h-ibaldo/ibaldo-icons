import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BurstSkewedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BurstSkewed: ForwardRefExoticComponent<BurstSkewedProps & RefAttributes<SVGSVGElement>>;

export default BurstSkewed;
export { BurstSkewed };

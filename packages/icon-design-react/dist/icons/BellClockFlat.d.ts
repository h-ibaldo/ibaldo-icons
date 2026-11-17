import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellClockFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellClockFlat: ForwardRefExoticComponent<BellClockFlatProps & RefAttributes<SVGSVGElement>>;

export default BellClockFlat;
export { BellClockFlat };

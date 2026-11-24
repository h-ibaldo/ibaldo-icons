import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellRingFlatProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellRingFlat: ForwardRefExoticComponent<BellRingFlatProps & RefAttributes<SVGSVGElement>>;

export default BellRingFlat;
export { BellRingFlat };

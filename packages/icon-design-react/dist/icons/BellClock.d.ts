import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface BellClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const BellClock: ForwardRefExoticComponent<BellClockProps & RefAttributes<SVGSVGElement>>;

export default BellClock;
export { BellClock };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface PointerClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const PointerClock: ForwardRefExoticComponent<PointerClockProps & RefAttributes<SVGSVGElement>>;

export default PointerClock;
export { PointerClock };

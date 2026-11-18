import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface MoonClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const MoonClock: ForwardRefExoticComponent<MoonClockProps & RefAttributes<SVGSVGElement>>;

export default MoonClock;
export { MoonClock };

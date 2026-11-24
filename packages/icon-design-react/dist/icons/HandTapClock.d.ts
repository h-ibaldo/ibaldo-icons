import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandTapClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandTapClock: ForwardRefExoticComponent<HandTapClockProps & RefAttributes<SVGSVGElement>>;

export default HandTapClock;
export { HandTapClock };

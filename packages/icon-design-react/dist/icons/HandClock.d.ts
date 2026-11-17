import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HandClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HandClock: ForwardRefExoticComponent<HandClockProps & RefAttributes<SVGSVGElement>>;

export default HandClock;
export { HandClock };

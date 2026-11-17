import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell2ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell2Clock: ForwardRefExoticComponent<Bell2ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell2Clock;
export { Bell2Clock };

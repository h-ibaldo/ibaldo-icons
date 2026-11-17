import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell3ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell3Clock: ForwardRefExoticComponent<Bell3ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell3Clock;
export { Bell3Clock };

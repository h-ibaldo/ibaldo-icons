import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell1ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell1Clock: ForwardRefExoticComponent<Bell1ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell1Clock;
export { Bell1Clock };

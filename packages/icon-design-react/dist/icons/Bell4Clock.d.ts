import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell4ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell4Clock: ForwardRefExoticComponent<Bell4ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell4Clock;
export { Bell4Clock };

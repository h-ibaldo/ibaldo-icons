import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell6ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell6Clock: ForwardRefExoticComponent<Bell6ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell6Clock;
export { Bell6Clock };

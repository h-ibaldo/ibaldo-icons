import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface Bell5ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Bell5Clock: ForwardRefExoticComponent<Bell5ClockProps & RefAttributes<SVGSVGElement>>;

export default Bell5Clock;
export { Bell5Clock };

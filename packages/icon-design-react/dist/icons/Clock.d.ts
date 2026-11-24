import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const Clock: ForwardRefExoticComponent<ClockProps & RefAttributes<SVGSVGElement>>;

export default Clock;
export { Clock };

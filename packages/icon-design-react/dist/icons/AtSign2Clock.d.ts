import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign2ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign2Clock: ForwardRefExoticComponent<AtSign2ClockProps & RefAttributes<SVGSVGElement>>;

export default AtSign2Clock;
export { AtSign2Clock };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign4ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign4Clock: ForwardRefExoticComponent<AtSign4ClockProps & RefAttributes<SVGSVGElement>>;

export default AtSign4Clock;
export { AtSign4Clock };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtSign5ClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtSign5Clock: ForwardRefExoticComponent<AtSign5ClockProps & RefAttributes<SVGSVGElement>>;

export default AtSign5Clock;
export { AtSign5Clock };

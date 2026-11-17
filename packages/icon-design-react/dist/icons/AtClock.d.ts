import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClock: ForwardRefExoticComponent<AtClockProps & RefAttributes<SVGSVGElement>>;

export default AtClock;
export { AtClock };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockCircle2Props extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClockCircle2: ForwardRefExoticComponent<AtClockCircle2Props & RefAttributes<SVGSVGElement>>;

export default AtClockCircle2;
export { AtClockCircle2 };

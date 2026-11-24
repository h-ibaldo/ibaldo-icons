import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockTallProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClockTall: ForwardRefExoticComponent<AtClockTallProps & RefAttributes<SVGSVGElement>>;

export default AtClockTall;
export { AtClockTall };

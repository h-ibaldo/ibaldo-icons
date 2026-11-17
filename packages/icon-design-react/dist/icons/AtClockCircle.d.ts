import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClockCircle: ForwardRefExoticComponent<AtClockCircleProps & RefAttributes<SVGSVGElement>>;

export default AtClockCircle;
export { AtClockCircle };

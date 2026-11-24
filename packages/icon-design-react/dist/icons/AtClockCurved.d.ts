import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClockCurved: ForwardRefExoticComponent<AtClockCurvedProps & RefAttributes<SVGSVGElement>>;

export default AtClockCurved;
export { AtClockCurved };

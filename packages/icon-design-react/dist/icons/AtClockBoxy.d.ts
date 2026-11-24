import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface AtClockBoxyProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const AtClockBoxy: ForwardRefExoticComponent<AtClockBoxyProps & RefAttributes<SVGSVGElement>>;

export default AtClockBoxy;
export { AtClockBoxy };

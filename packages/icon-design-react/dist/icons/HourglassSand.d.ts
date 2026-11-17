import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSand: ForwardRefExoticComponent<HourglassSandProps & RefAttributes<SVGSVGElement>>;

export default HourglassSand;
export { HourglassSand };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandCurved: ForwardRefExoticComponent<HourglassSandCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandCurved;
export { HourglassSandCurved };

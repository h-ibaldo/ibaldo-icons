import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCurved: ForwardRefExoticComponent<HourglassCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassCurved;
export { HourglassCurved };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCircleCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCircleCurved: ForwardRefExoticComponent<HourglassCircleCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassCircleCurved;
export { HourglassCircleCurved };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCircle: ForwardRefExoticComponent<HourglassCircleProps & RefAttributes<SVGSVGElement>>;

export default HourglassCircle;
export { HourglassCircle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandCircle: ForwardRefExoticComponent<HourglassStandCircleProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandCircle;
export { HourglassStandCircle };

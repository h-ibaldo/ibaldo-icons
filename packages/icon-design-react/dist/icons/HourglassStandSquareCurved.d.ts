import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSquareCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSquareCurved: ForwardRefExoticComponent<HourglassStandSquareCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSquareCurved;
export { HourglassStandSquareCurved };

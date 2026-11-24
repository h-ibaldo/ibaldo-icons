import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandCurved: ForwardRefExoticComponent<HourglassStandCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandCurved;
export { HourglassStandCurved };

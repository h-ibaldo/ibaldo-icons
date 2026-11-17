import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSandCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSandCurved: ForwardRefExoticComponent<HourglassStandSandCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSandCurved;
export { HourglassStandSandCurved };

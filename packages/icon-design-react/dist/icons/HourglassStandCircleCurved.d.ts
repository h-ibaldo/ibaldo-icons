import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandCircleCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandCircleCurved: ForwardRefExoticComponent<HourglassStandCircleCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandCircleCurved;
export { HourglassStandCircleCurved };

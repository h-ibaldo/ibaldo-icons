import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSandFallingCurvedProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSandFallingCurved: ForwardRefExoticComponent<HourglassStandSandFallingCurvedProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSandFallingCurved;
export { HourglassStandSandFallingCurved };

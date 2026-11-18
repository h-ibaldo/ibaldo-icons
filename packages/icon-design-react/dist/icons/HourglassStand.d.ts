import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStand: ForwardRefExoticComponent<HourglassStandProps & RefAttributes<SVGSVGElement>>;

export default HourglassStand;
export { HourglassStand };

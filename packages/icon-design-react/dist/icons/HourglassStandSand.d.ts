import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSandProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSand: ForwardRefExoticComponent<HourglassStandSandProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSand;
export { HourglassStandSand };

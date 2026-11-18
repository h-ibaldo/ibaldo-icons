import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassStandSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassStandSquare: ForwardRefExoticComponent<HourglassStandSquareProps & RefAttributes<SVGSVGElement>>;

export default HourglassStandSquare;
export { HourglassStandSquare };

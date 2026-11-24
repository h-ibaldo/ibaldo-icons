import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSquare: ForwardRefExoticComponent<HourglassSquareProps & RefAttributes<SVGSVGElement>>;

export default HourglassSquare;
export { HourglassSquare };

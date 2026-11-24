import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSquareDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSquareDiagonal: ForwardRefExoticComponent<HourglassSquareDiagonalProps & RefAttributes<SVGSVGElement>>;

export default HourglassSquareDiagonal;
export { HourglassSquareDiagonal };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassCircleDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassCircleDiagonal: ForwardRefExoticComponent<HourglassCircleDiagonalProps & RefAttributes<SVGSVGElement>>;

export default HourglassCircleDiagonal;
export { HourglassCircleDiagonal };

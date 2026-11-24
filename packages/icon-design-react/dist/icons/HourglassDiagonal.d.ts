import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassDiagonal: ForwardRefExoticComponent<HourglassDiagonalProps & RefAttributes<SVGSVGElement>>;

export default HourglassDiagonal;
export { HourglassDiagonal };

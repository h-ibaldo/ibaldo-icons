import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandDiagonal: ForwardRefExoticComponent<HourglassSandDiagonalProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandDiagonal;
export { HourglassSandDiagonal };

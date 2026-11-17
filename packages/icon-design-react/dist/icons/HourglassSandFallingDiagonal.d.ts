import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface HourglassSandFallingDiagonalProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const HourglassSandFallingDiagonal: ForwardRefExoticComponent<HourglassSandFallingDiagonalProps & RefAttributes<SVGSVGElement>>;

export default HourglassSandFallingDiagonal;
export { HourglassSandFallingDiagonal };

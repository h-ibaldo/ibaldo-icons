import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquare: ForwardRefExoticComponent<ChartLinePeakSquareProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquare;
export { ChartLinePeakSquare };

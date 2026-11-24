import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquareX: ForwardRefExoticComponent<ChartLinePeakSquareXProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquareX;
export { ChartLinePeakSquareX };

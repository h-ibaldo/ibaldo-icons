import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakSquareCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakSquareCheck: ForwardRefExoticComponent<ChartLinePeakSquareCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakSquareCheck;
export { ChartLinePeakSquareCheck };

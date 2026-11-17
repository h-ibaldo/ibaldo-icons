import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakCircleXProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakCircleX: ForwardRefExoticComponent<ChartLinePeakCircleXProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakCircleX;
export { ChartLinePeakCircleX };

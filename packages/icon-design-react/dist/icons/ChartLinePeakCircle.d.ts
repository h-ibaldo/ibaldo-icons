import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakCircleProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakCircle: ForwardRefExoticComponent<ChartLinePeakCircleProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakCircle;
export { ChartLinePeakCircle };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakCircleCheckProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakCircleCheck: ForwardRefExoticComponent<ChartLinePeakCircleCheckProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakCircleCheck;
export { ChartLinePeakCircleCheck };

import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakCircleMinusProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakCircleMinus: ForwardRefExoticComponent<ChartLinePeakCircleMinusProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakCircleMinus;
export { ChartLinePeakCircleMinus };

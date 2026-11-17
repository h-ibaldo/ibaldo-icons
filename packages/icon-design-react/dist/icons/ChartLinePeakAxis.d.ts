import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakAxisProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeakAxis: ForwardRefExoticComponent<ChartLinePeakAxisProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeakAxis;
export { ChartLinePeakAxis };

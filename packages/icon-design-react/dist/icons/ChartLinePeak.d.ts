import { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export interface ChartLinePeakProps extends SVGProps<SVGSVGElement> {
  color?: string;
  size?: number | string;
  strokeWidth?: number | string;
  className?: string;
}

declare const ChartLinePeak: ForwardRefExoticComponent<ChartLinePeakProps & RefAttributes<SVGSVGElement>>;

export default ChartLinePeak;
export { ChartLinePeak };
